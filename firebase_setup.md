# 🔥 TrendLily — Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → name it `trendlily`
3. Disable Google Analytics (optional) → **Create project**

---

## Step 2: Enable Authentication

1. In Firebase Console → **Authentication** → **Get started**
2. Go to **Sign-in method** tab → Enable:
   - ✅ **Email/Password**
   - ✅ **Google**

---

## Step 3: Create Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Choose **Production mode** → pick your region (e.g. `asia-south1` for India)
3. Click **Enable**

### Firestore Security Rules
Go to **Firestore → Rules** and paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Users can read/write their own cart
    match /carts/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Users can create orders; read their own orders
    match /orders/{orderId} {
      allow create: if request.auth != null;
      allow read:   if request.auth != null && resource.data.userId == request.auth.uid;
      // Admin read-all (set up Firebase Admin SDK separately)
    }

    // Users can read/write their own saved address
    match /addresses/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Click **Publish**.

### Firestore Indexes
Create a **composite index** for the orders query:
- Collection: `orders`
- Fields: `userId` (Ascending), `createdAt` (Descending)

Go to **Firestore → Indexes → Add index** and add the above.
(Or just open the app — Firebase will show a link in the console to auto-create it.)

---

## Step 4: Register Your Web App & Get Config

1. Firebase Console → **Project Settings** (gear icon)
2. Scroll to **Your apps** → click **</>** (web)
3. App nickname: `TrendLily Web` → **Register app**
4. Copy the `firebaseConfig` object — it looks like:

```javascript
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "trendlily-xxxx.firebaseapp.com",
  projectId:         "trendlily-xxxx",
  storageBucket:     "trendlily-xxxx.appspot.com",
  messagingSenderId: "12345678",
  appId:             "1:12345678:web:abcdef"
};
```

5. **Paste this config** into BOTH `mycart.html` and `order.html`
   (replace the placeholder `firebaseConfig` object — search for `YOUR_API_KEY`)

---

## Step 5: Add Authorized Domains

1. Firebase Console → **Authentication → Settings → Authorized domains**
2. Add your hosting domain (e.g. `trendlily.com`, `yoursite.netlify.app`, etc.)
3. `localhost` is already authorized for development.

---

## Step 6: Deploy (Choose One)

### Option A — Firebase Hosting (Recommended)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project, set public dir to your folder, SPA = No
firebase deploy
```
Your site will be live at `https://YOUR_PROJECT.web.app`

### Option B — Netlify / Vercel
- Just drag & drop your HTML files to **app.netlify.com**
- Add your Netlify URL to Firebase Authorized Domains (Step 5)

### Option C — GitHub Pages / Any Static Host
- Upload files anywhere, add domain to Firebase Authorized Domains.

---

## Firestore Data Structure

```
/users/{uid}
  - name, email, photoURL, createdAt, role

/carts/{uid}
  - items: [ { id, name, price, quantity, size, color, image } ]
  - updatedAt

/addresses/{uid}
  - firstName, lastName, phone, email, address, city, state, pin, notes
  - updatedAt

/orders/{autoId}
  - orderId, userId, userEmail
  - address: { firstName, ... }
  - items: [ ... ]
  - payment, delivery, eta
  - subtotal, discountAmt, deliveryFee, gst, codFee, total
  - status: "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
  - createdAt
```

---

## Admin Panel (Optional Next Step)

To manage orders, update order statuses, and view all customers:
- Use **Firebase Console → Firestore** directly
- OR build an admin page that queries all orders (requires Admin SDK / service account)
- OR use **Retool / AppSmith** connected to Firebase for a no-code admin dashboard

---

## Coupon Codes (Built-in)

The following coupons work out of the box:
| Code      | Discount |
|-----------|----------|
| `SAVE10`  | 10% OFF  |
| `FLAT100` | ₹100 OFF |
| `WELCOME` | 15% OFF  |
| `LILY20`  | 20% OFF  |

To add more, edit the `COUPONS` object in `order.html`.  
For production, move coupons to Firestore so you can manage them without redeploying.

---

## What's Included

| Feature                        | Status |
|-------------------------------|--------|
| Email/Password Auth            | ✅     |
| Google Sign-In                 | ✅     |
| Cart synced to Firestore       | ✅     |
| Guest cart → account migration | ✅     |
| Orders saved to Firestore      | ✅     |
| Address auto-saved & recalled  | ✅     |
| Order history from Firestore   | ✅     |
| Guest order history (local)    | ✅     |
| Coupon codes                   | ✅     |
| Multi-host ready               | ✅     |
| GST + COD fee calculation      | ✅     |
| Form validation                | ✅     |
| Responsive mobile design       | ✅     |