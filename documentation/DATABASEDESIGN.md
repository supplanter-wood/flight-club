{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww35640\viewh21840\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Database Design for Subscription-Based Flight Deal Service\
\
## **Overview**\
The database for the subscription-based flight deal service is designed to handle user information, subscription management, flight deal data, user preferences, and analytics efficiently. It supports high availability and scalability, ensuring seamless performance as the user base grows.\
\
---\
\
## **Entity-Relationship Diagram (ERD)**\
### Entities:\
1. **Users**: Stores user details and account information.\
2. **Subscriptions**: Tracks subscription tiers and billing.\
3. **Flight Deals**: Contains details about available deals.\
4. **User Preferences**: Captures user-specific preferences for flight deals.\
5. **Notifications**: Tracks notifications sent to users.\
6. **Analytics**: Stores engagement and usage metrics.\
\
---\
\
## **Schema Design**\
\
### **1. Users**\
- **Table Name**: `Users`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `email` (String, unique, not null)\
  - `password_hash` (String, not null)\
  - `created_at` (Timestamp, default: current timestamp)\
  - `updated_at` (Timestamp, default: current timestamp, on update: current timestamp)\
  - `is_premium` (Boolean, default: false)\
  - `premium_expires_at` (Timestamp, nullable)\
\
### **2. Subscriptions**\
- **Table Name**: `Subscriptions`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `user_id` (Foreign Key, references `Users.id`)\
  - `tier` (Enum: `free`, `premium`, not null)\
  - `price` (Decimal, nullable)\
  - `start_date` (Timestamp, not null)\
  - `end_date` (Timestamp, nullable)\
\
### **3. Flight Deals**\
- **Table Name**: `FlightDeals`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `departure_airport` (String, not null)\
  - `arrival_airport` (String, not null)\
  - `departure_date` (Date, not null)\
  - `return_date` (Date, nullable)\
  - `price` (Decimal, not null)\
  - `airline` (String, nullable)\
  - `deal_type` (Enum: `error_fare`, `sale`, `last_minute`, nullable)\
  - `created_at` (Timestamp, default: current timestamp)\
\
### **4. User Preferences**\
- **Table Name**: `UserPreferences`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `user_id` (Foreign Key, references `Users.id`)\
  - `preferred_departure_airports` (JSON, nullable)\
  - `preferred_destinations` (JSON, nullable)\
  - `price_range` (String, nullable)\
  - `travel_dates` (JSON, nullable)\
\
### **5. Notifications**\
- **Table Name**: `Notifications`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `user_id` (Foreign Key, references `Users.id`)\
  - `deal_id` (Foreign Key, references `FlightDeals.id`)\
  - `notification_type` (Enum: `email`, `push`, `web`, not null)\
  - `sent_at` (Timestamp, default: current timestamp)\
\
### **6. Analytics**\
- **Table Name**: `Analytics`\
- **Columns**:\
  - `id` (Primary Key, UUID)\
  - `metric_name` (String, not null)\
  - `value` (Decimal or Integer, not null)\
  - `recorded_at` (Timestamp, default: current timestamp)\
\
---\
\
## **Indexes and Optimization**\
- **Users**:\
  - Index on `email` for quick user lookup.\
- **Subscriptions**:\
  - Index on `user_id` for subscription management.\
- **FlightDeals**:\
  - Composite index on `departure_airport` and `arrival_airport` for fast deal searches.\
- **UserPreferences**:\
  - Index on `user_id` for preference matching.\
- **Notifications**:\
  - Index on `user_id` and `sent_at` for notification tracking.\
- **Analytics**:\
  - Index on `metric_name` and `recorded_at` for trend analysis.\
\
---\
\
## **Scaling and Performance**\
1. **Read/Write Splitting**:\
   - Use a read-replica database for high-volume reads (e.g., browsing deals).\
2. **Caching**:\
   - Redis for frequently accessed flight deals and user preferences.\
3. **Partitioning**:\
   - Partition `FlightDeals` by `created_at` to manage historical data efficiently.\
4. **Full-Text Search**:\
   - Use ElasticSearch for searching deals based on keywords.\
\
---\
\
## **Backup and Recovery**\
- Schedule daily backups of the primary database.\
- Retain backups for a rolling 30-day period.\
- Implement point-in-time recovery for critical data.\
\
---\
\
**End of Document**\
\
}