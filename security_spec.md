# Security Specification: Hamdard School Admissions

## 1. Data Invariants
- An admission record cannot be created without all required fields.
- Document IDs must be valid alphanumeric strings.
- `createdAt` and `updatedAt` must be server timestamps.
- Initial `status` must always be 'pending'.
- Public (unauthenticated) users can ONLY create records. They cannot read, list, update, or delete.
- Only authenticated Admins (to be defined in `admins` collection) can read, list, and update statuses.

## 2. The Dirty Dozen Payloads (Rejection Targets)
1. **The Ghost Field**: Adding `isVerified: true` to an admission payload.
2. **Identity Spoofing**: Attempting to set `status: 'accepted'` during creation.
3. **Resource Poisoning**: Sending a 1MB string as the `childName`.
4. **Timestamp Fraud**: Providing a client-side date for `createdAt`.
5. **Collection Scraping**: Attempting to `list` the `/admissions/` collection as an unauthenticated user.
6. **Data Leak**: Attempting to `get` a specific admission record by ID without being an admin.
7. **Status Shortcut**: A non-admin trying to update `status` from 'pending' to 'accepted'.
8. **Owner Sabotage**: Attempting to `delete` a record once submitted.
9. **Invalid Class**: Submitting a class name that isn't in the predefined list (handled by schema).
10. **Shadow Key**: Submitting a document with extra keys not defined in the blueprint.
11. **ID Poisoning**: Using a 2KB junk string as a Document ID.
12. **Unauthorized Metadata**: Trying to change the `createdAt` timestamp during an update.

## 3. Test Runner Strategy
- All tests will verify `PERMISSION_DENIED` for the above payloads.
- Valid `create` operation will be verified for unauthenticated users.
- Valid `list/update` will be verified only for UID present in `/admins/`.
