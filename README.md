# FE Modular Architecture – Onboarding Guide

## 1. Tổng quan

Đây là Frontend project sử dụng **Next.js App Router** theo kiến trúc
**Modular Monolith (Domain-based)**.

Mục tiêu:

- Scale cho dự án lớn
- Nhiều team làm song song
- Dễ maintain, dễ tách micro-frontend trong tương lai

---

## 2. Kiến trúc tổng thể

src/
├─ app/ # App shell & routing (NO business logic)
├─ modules/ # Business domains (Payroll, Auth, ...)
├─ core/ # Cross-module platform logic
├─ shared/ # Shared UI & utils (NO business)
└─ middleware.ts

### Dependency Rule

app → modules
modules → core, shared
core → shared

❌ core → modules
❌ shared → core/modules
❌ modules → app

## 3. Khi nào tạo module mới?

Tạo module mới khi:

- Có domain business riêng
- Có route / permission / API riêng
- Có khả năng maintain độc lập

KHÔNG tạo module cho:

- Component UI dùng chung
- Helper kỹ thuật nhỏ

---

## 4. Cấu trúc chuẩn của một module

modules/payroll/
├─ app/ # page, layout, loading, error
├─ api/ # API client
├─ services/ # Business logic
├─ components/ # Client UI
├─ hooks/ # React hooks
├─ store/ # Local state (Zustand)
├─ contracts/ # Public interfaces
├─ events/ # Event constants
├─ types/ # DTO / types
└─ index.ts # Public API

⚠️ Module khác CHỈ được import qua index.ts

---

## 5. Flow xử lý chuẩn

User
→ Page (Server)
→ Hook (Client nếu cần)
→ Service (Business logic)
→ API client
→ State (nếu cần)
→ UI render

Rule:

- Page mỏng
- Logic nằm trong service
- Service không biết UI

---

## 6. Server vs Client Component

Mặc định: **Server Component**

Chỉ dùng Client Component khi:

- Có interaction (onClick, onChange)
- Có local state
- Dùng browser API

❌ Không dùng useEffect để fetch data

---

## 7. State Management

Local state là mặc định.

Global state CHỈ dùng cho:

- auth
- tenant
- permission

❌ Không dùng global store cho form / filter
❌ Không dùng store thay cho server data

---

## 8. API & Mock

Trong giai đoạn chưa có backend:

- API layer được phép mock
- Service / Page KHÔNG biết mock

Khi backend sẵn sàng:

- Chỉ đổi API implementation
- Không refactor service / UI

---

## 9. ESLint & Architecture

Project đã cấu hình ESLint để:

- Cấm import sai module boundary
- Cấm import sâu module khác
- Enforce public API qua index.ts

❌ Nếu ESLint báo lỗi → kiến trúc đang bị phá

---

## 10. Checklist khi code

✅ Chia module theo domain  
✅ Business logic nằm trong services/  
✅ Không import sâu module khác  
✅ Không use client cho cả page  
✅ API chỉ nằm trong api/

---

## 11. Khi không chắc nên làm gì?

👉 Hỏi Tech Lead hoặc xem document:
`FE Modular Architecture Guideline`
