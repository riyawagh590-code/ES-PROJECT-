"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const savedBookings = localStorage.getItem(
        "campus_concierge_bookings"
      );

      if (savedBookings) {
        setBookings(JSON.parse(savedBookings));
      }
    } catch (error) {
      console.error("Unable to load bookings:", error);
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fffaf5",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/student"
          style={{
            color: "#7c3aed",
            fontWeight: "600",
          }}
        >
          ← Back to Dashboard
        </Link>

        <div style={{ marginTop: "35px" }}>
          <p
            style={{
              color: "#7c3aed",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            MY CAMPUS ACTIVITY
          </p>

          <h1
            style={{
              fontSize: "40px",
              margin: "8px 0",
              color: "#1f2937",
            }}
          >
            My Bookings
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "17px",
            }}
          >
            Keep track of your campus services and bookings.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div
            style={{
              marginTop: "40px",
              padding: "50px 25px",
              background: "#ffffff",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <h2>No bookings yet</h2>

            <p
              style={{
                color: "#6b7280",
                margin: "12px 0 25px",
              }}
            >
              Your confirmed services will appear here.
            </p>

            <Link
              href="/student"
              style={{
                display: "inline-block",
                background: "#7c3aed",
                color: "#ffffff",
                padding: "12px 22px",
                borderRadius: "10px",
                fontWeight: "700",
              }}
            >
              Explore Services
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            {bookings.map((booking, index) => (
              <div
                key={booking.id || index}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "24px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        margin: 0,
                        color: "#1f2937",
                      }}
                    >
                      {booking.service ||
                        booking.serviceName ||
                        "Campus Service"}
                    </h2>

                    <p
                      style={{
                        color: "#6b7280",
                        margin: "8px 0",
                      }}
                    >
                      {booking.vendor ||
                        booking.vendorName ||
                        "Vendor"}
                    </p>
                  </div>

                  <span
                    style={{
                      height: "fit-content",
                      padding: "7px 12px",
                      borderRadius: "20px",
                      background: "#dcfce7",
                      color: "#166534",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    {booking.status || "Pending"}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    flexWrap: "wrap",
                    marginTop: "20px",
                    color: "#4b5563",
                  }}
                >
                  {booking.date && (
                    <span>
                      📅 {booking.date}
                    </span>
                  )}

                  {booking.time && (
                    <span>
                      🕐 {booking.time}
                    </span>
                  )}

                  {booking.price && (
                    <span>
                      ₹{booking.price}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}