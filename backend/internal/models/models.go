package models

import "time"

type Program struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Image       string    `json:"image"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type Event struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Date        time.Time `json:"date"`
	Location    string    `json:"location"`
	Image       string    `json:"image"`
	CreatedAt   time.Time `json:"created_at"`
}

type Contact struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Subject   string    `json:"subject"`
	Message   string    `json:"message"`
	CreatedAt time.Time `json:"created_at"`
}

type Donation struct {
	ID          int       `json:"id"`
	Amount      float64   `json:"amount"`
	DonorName   string    `json:"donor_name"`
	DonorEmail  string    `json:"donor_email"`
	Anonymous   bool      `json:"anonymous"`
	Message     string    `json:"message"`
	PaymentID   string    `json:"payment_id"`
	Status      string    `json:"status"`
	CreatedAt   time.Time `json:"created_at"`
}
