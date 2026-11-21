# Ashish Fashion Club — starter project

A Next.js + TypeScript + MongoDB starter for a fashion storefront and admin system. Includes a responsive black/white/gold storefront, admin dashboard shell, MongoDB models, and starter product/order API routes.

## Run locally
1. Install Node.js 20+ on a computer.
2. Extract this ZIP and open the folder in a terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and fill in MongoDB URI and a long random JWT secret.
5. Run `npm run dev`, then open http://localhost:3000.

## Folder structure
- `app/` — storefront, admin shell, API routes, global styling
- `app/api/products` — product read/create endpoints
- `app/api/orders` — order read/create endpoints
- `models/` — Product, Order, User and Expense MongoDB schemas
- `lib/` — database connection and JWT helper
- `.env.example` — integration configuration template

## Database collections
- `users`: customer profiles, addresses, staff roles
- `products`: product details, image URLs, size/color variants, stock
- `orders`: line items, shipping address, payment and fulfillment state
- `expenses`: packaging, shipping, ads, salary, rent and other expenses
Additional collections recommended before production: `categories`, `banners`, `coupons`, `reviews`, `payments`, `refunds`, `auditlogs`, `notifications`, `wishlists`, `carts`.

## Important production work still required
This is a runnable starter, not a finished live marketplace. Before accepting real orders or payments, implement and test:
- Staff/customer authentication, OTP provider integration, password reset, secure HttpOnly cookies, CSRF/rate limiting and role-based API authorization.
- Product CRUD validation, stock reservation and atomic inventory updates.
- Razorpay order creation + signature verification + webhook verification (never trust client payment status).
- Cloudinary signed uploads; validate file type and size.
- GST calculation and invoice numbering reviewed by an Indian tax professional.
- Shipping aggregator integration, tracking updates, return/refund workflows.
- Email/WhatsApp/SMS provider integration and notification retries.
- Admin audit logs, backups, monitoring, privacy policy, terms, return policy and security review.

**Do not deploy this starter as a production store or enter live customer/payment data until the above protections and integrations are completed.** Keep all secrets in environment variables; never commit `.env.local`.
