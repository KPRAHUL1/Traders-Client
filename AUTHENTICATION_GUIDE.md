# Authentication System Guide

## Overview
This application now supports two types of users with different authentication flows:

### 1. Regular Users (No Role Required)
- **Path**: `/login/regular`
- **Authentication**: Mobile number + OTP
- **Access**: Integrated marketplace (IndiaMART + Amazon style)
- **Features**: 
  - Browse and purchase products
  - Shopping cart functionality
  - No role selection needed

### 2. Business Users (Role-Based)
- **Path**: `/role-selection` → `/login/role-based/{role}`
- **Authentication**: Mobile number + OTP + Role selection
- **Available Roles**:
  - **Agent**: Manage orders, payments, and portfolio
  - **Manufacturer**: Oversee production, catalogs, and fulfillment
  - **Contractor**: Access assigned projects and documentation
- **Access**: Role-specific dashboards

## Key Features

### ✅ Persistent Sessions
- **No redirect on refresh**: Users stay on their current page when refreshing
- **Automatic rehydration**: Authentication state is restored from localStorage
- **Loading states**: Proper loading indicators while checking authentication

### ✅ Mobile Number Authentication
- **OTP-based verification**: Secure authentication using mobile numbers
- **No passwords required**: Simplified login process
- **Simulated OTP**: Currently uses mock OTP verification (can be replaced with real SMS service)

### ✅ Role-Based Access Control
- **Regular users**: Access marketplace only
- **Business users**: Access role-specific dashboards
- **Automatic redirection**: Users are redirected to appropriate login based on their access needs

### ✅ Integrated Marketplace
- **Amazon-style interface**: Product browsing, search, cart functionality
- **IndiaMART integration**: Business-to-business features
- **Responsive design**: Works on all device sizes
- **Real-time cart**: Add/remove products with live updates

## File Structure

```
src/
├── components/
│   └── RoleSelection.jsx          # Role selection interface
├── context/
│   └── AuthContext.jsx            # Enhanced authentication context
├── modules/
│   ├── auth/
│   │   ├── RegularUserLogin.jsx   # Regular user login
│   │   └── RoleBasedLogin.jsx     # Role-based user login
│   ├── marketplace/
│   │   └── Marketplace.jsx        # Integrated marketplace interface
│   └── public/
│       └── Landing.jsx            # Updated landing page
└── routes/
    ├── routes.jsx                 # Updated routing configuration
    └── ProtectedRoute.jsx         # Enhanced route protection
```

## Usage Examples

### For Regular Users:
1. Visit `/login/regular`
2. Enter mobile number
3. Verify OTP
4. Access marketplace at `/marketplace`

### For Business Users:
1. Visit `/role-selection`
2. Choose your role (Agent, Manufacturer, Contractor)
3. Enter mobile number
4. Verify OTP
5. Access role-specific dashboard

### For Developers:
- Authentication state persists across page refreshes
- Users are automatically redirected to appropriate login based on route requirements
- Loading states prevent flash of unauthenticated content
- Role-based access control ensures users only access authorized areas

## Technical Implementation

### Authentication Context
- Enhanced with `isLoading`, `isRoleBasedUser()`, `isRegularUser()` methods
- Supports both user types with different data structures
- Automatic cleanup of localStorage on logout

### Route Protection
- `ProtectedRoute` component handles both user types
- Automatic redirection to appropriate login based on route requirements
- Loading states during authentication checks

### State Management
- User data includes `userType` field ('regular' or 'role-based')
- Role information stored for business users
- Mobile number stored for all users

## Future Enhancements
- Real SMS OTP integration
- User profile management
- Advanced marketplace features
- Business user onboarding flows
- Analytics and reporting
