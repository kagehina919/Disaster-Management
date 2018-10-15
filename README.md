# Disaster Warning System

-----

### Introduction

We are building a notifier web-app. The purpose of the app is to notify people living in a certain region (North, South, East, West, Central) of India via emails about forecasts of natural disasters such as cyclones, floods, hurricanes.The app will have a register page where the user can enter details such as their name, email-id, the region whose notifications they want to receive. upon registering the user can choose whatever regions, among chosen regions of which he wants to receive the emails, upon subscription to receiving emails, the admin can send email to the registered user about the weather forecasts for the regions selected by the user. Admin can send emails to mailing list of a given peopleThe app can be used by the government or other agencies to notify people about dire weather changes and to help them be ready for it in advance and stay safe.

-----

### Technology to be used
- Backend for web App : **[Flask](http://flask.pocoo.org/), MySQLDB, SQLAlchemy**
- Frontend for Interfaces : **[ReactJS](https://reactjs.org/), [Reactstrap](https://reactstrap.github.io/), Javascript**
- Hosting: **Microsoft Azure Services**
- Mail Service Provider : **[SendGrid E-Mail APIs](https://sendgrid.com/solutions/email-api/) with [GitHub Student Developer Pack](https://education.github.com/pack)**

-----

### Program Flow
1. User registers and selects regions.
1. User subscribes to receive E-mails about specific regions of the chosen list.
1. Admin can send mails to the mailing list in case of a disaster forecast for a particular region.
1. User can use his account to update region subscriptions

----

### Components
A few sample components that will be used.

| # | Component | Link |
|---|:---------:|:-------|
|- | Dropdown | https://reactstrap.github.io/components/dropdowns/ |
|- | Forms | https://reactstrap.github.io/components/form/ |
|- | Alert | https://reactstrap.github.io/components/alerts/ |
|- | Modals | https://reactstrap.github.io/components/modals/ |
|- | Card | https://reactstrap.github.io/components/card/ |
