/**
 * Currency formatting utilities
 * PHP is the base currency; USD conversion uses a static exchange rate.
 * Update PHP_TO_USD when needed or swap in a live rates API.
 */

const PHP_TO_USD = 0.0175; // ~1 PHP = 0.0175 USD (adjust as needed)

/**
 * Format a number as Philippine Peso — ₱1,234
 */
export function fmtPhp(amount) {
  if (!amount && amount !== 0) return "₱0";
  return `₱${Number(amount).toLocaleString("en-PH")}`;
}

/**
 * Convert PHP to USD and return formatted string — $21.88
 */
export function toUsd(phpAmount) {
  if (!phpAmount && phpAmount !== 0) return "$0";
  const usd = Number(phpAmount) * PHP_TO_USD;
  return `$${usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
