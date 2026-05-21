interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const memoryStore = new Map<string, RateLimitRecord>();

// Periodically clean up expired entries every 1 minute
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of memoryStore.entries()) {
      if (value.resetTime <= now) {
        memoryStore.delete(key);
      }
    }
  }, 60000).unref?.(); // Use unref if available (Node.js) so it doesn't block process exit
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // UNIX timestamp in seconds
}

/**
 * Enforces a rate limit for a given identifier.
 * @param ip Unique identifier (e.g. IP address)
 * @param limit Maximum allowed requests in the window
 * @param windowMs Time window in milliseconds (e.g. 600000 for 10 minutes)
 */
export function rateLimit(ip: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const record = memoryStore.get(ip);

  if (!record || record.resetTime <= now) {
    // Start a new window
    const resetTime = now + windowMs;
    memoryStore.set(ip, { count: 1, resetTime });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: Math.ceil(resetTime / 1000),
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: Math.ceil(record.resetTime / 1000),
    };
  }

  record.count += 1;
  memoryStore.set(ip, record);

  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: Math.ceil(record.resetTime / 1000),
  };
}
