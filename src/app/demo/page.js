"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Sample prayer data - should be fetched from Masjidal API or your backend
  const [prayerData] = useState({
    date: "Tuesday, Oct 28, 2025",
    hijriDate: "Jumada Al-Awwal 6, 1447",
    prayers: [
      { name: "Fajr", starts: "6:09 AM", iqamah: "6:45 AM" },
      { name: "Sunrise", starts: "7:49 AM", iqamah: "-" },
      { name: "Dhuhr", starts: "1:01 PM", iqamah: "1:45 PM" },
      { name: "Asr", starts: "3:48 PM", iqamah: "4:30 PM" },
      {
        name: "Maghrib",
        starts: "6:17 PM",
        iqamah: "6:20 PM",
        highlight: true,
      },
      { name: "Isha", starts: "7:44 PM", iqamah: "8:00 PM" },
      { name: "Jumuah 1", starts: "1:30 PM", iqamah: "-", isJumuah: true },
      { name: "Jumuah 2", starts: "2:30 PM", iqamah: "-", isJumuah: true },
      { name: "Jumuah 3", starts: "3:20 PM", iqamah: "-", isJumuah: true },
    ],
  });

  return (
    <div
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Header with Mosque Silhouettes */}
      <header
        style={{
          background: "#2d5238",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top White Section */}
        <div
          style={{
            background: "#fff",
            padding: "1rem 1rem 0 1rem",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            {/* Logo and Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              {/* Left Logo */}
              <div style={{ textAlign: "center" }}>
                <Image
                  src="/logo.jpg"
                  alt="Masjid Nouh Logo"
                  width={90}
                  height={90}
                  style={{ objectFit: "contain" }}
                />
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#2d5238",
                    marginTop: "0.3rem",
                    fontWeight: "600",
                  }}
                >
                  NOUH ISLAMIC
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#2d5238",
                    fontWeight: "600",
                  }}
                >
                  CENTRE OF CANADA
                </div>
              </div>

              {/* Center Title */}
              <div style={{ textAlign: "center", flex: 1 }}>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#2d5238",
                    margin: 0,
                    letterSpacing: "2px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Masjid Nouh
                </h1>
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#d4812f",
                    margin: "0.2rem 0",
                    fontWeight: "500",
                  }}
                >
                  مسجد نوح
                </p>
              </div>

              {/* Right Mosque Silhouettes */}
              <div style={{ width: 90, height: 90 }}></div>
            </div>
          </div>

          {/* Decorative mosque silhouettes */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "300px",
              height: "180px",
              backgroundImage: "url('/mosque-silhouette.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right top",
              opacity: 0.15,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Curved Wave Divider */}
        <div
          style={{
            background: "#fff",
            height: "50px",
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 1440 60"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "60px",
            }}
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 Q360,0 720,30 T1440,30 L1440,60 L0,60 Z"
              fill="#2d5238"
            />
          </svg>
        </div>

        {/* Navigation */}
        <nav
          style={{
            background: "#2d5238",
            padding: "0.8rem 1rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: 0,
              flexWrap: "wrap",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {[
              "HOME",
              "ABOUT",
              "SERVICES",
              "GALLERY",
              "LEARNING",
              "DONATION",
              "CONTACT",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "0.7rem 1.8rem",
                    display: "block",
                    fontWeight: "600",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          background: "linear-gradient(to bottom, #f5f5f0 0%, #ffffff 100%)",
          minHeight: "100vh",
          padding: "3rem 1rem",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Mission Statement */}
          <section
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              padding: "0 2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.9",
                color: "#222",
                margin: 0,
                fontWeight: "400",
              }}
            >
              The Nouh Islamic Centre of Canada- Masjid Nouh is committed to
              building a united community through faith, education, and
              outreach. Join us in growing together with purpose and compassion.
            </p>
          </section>

          {/* Main Content Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "400px 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column - Prayer Timings */}
            <div>
              <section
                style={{
                  background: "#3a4e47",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                {/* Prayer Timings Header */}
                <div
                  style={{
                    background: "#4a7c59",
                    padding: "1.2rem",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      color: "#fff",
                      margin: 0,
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    PRAYER TIMINGS
                  </h2>
                </div>

                {/* Date Info */}
                <div
                  style={{
                    background: "#3a4e47",
                    padding: "1rem",
                    textAlign: "center",
                    color: "#fff",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                    {prayerData.date}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      marginTop: "0.3rem",
                      opacity: 0.9,
                    }}
                  >
                    {prayerData.hijriDate}
                  </div>
                </div>

                {/* Table Header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    background: "#3a4e47",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    padding: "1rem 0",
                    borderBottom: "2px solid #4a7c59",
                  }}
                >
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>STARTS</div>
                  <div style={{ textAlign: "center" }}>IQAMAH</div>
                </div>

                {/* Prayer Rows */}
                {prayerData.prayers.map((prayer, index) => (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      background: prayer.highlight
                        ? "#4a7c59"
                        : index % 2 === 0
                        ? "#3a4e47"
                        : "#445952",
                      color: "#fff",
                      padding: "1rem 0",
                      fontSize: "1.05rem",
                      borderBottom:
                        index < prayerData.prayers.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      {prayer.name}
                    </div>
                    <div style={{ textAlign: "center" }}>{prayer.starts}</div>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      {prayer.iqamah}
                    </div>
                  </div>
                ))}

                {/* Carousel Dots */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 8,
                    padding: "1rem 0",
                    background: "#3a4e47",
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((dot, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === 0 ? 14 : 10,
                        height: i === 0 ? 14 : 10,
                        borderRadius: "50%",
                        background: i === 0 ? "#fff" : "transparent",
                        border: "2px solid #fff",
                      }}
                    />
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    padding: "1.2rem",
                    textAlign: "center",
                    background: "#3a4e47",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <button
                    style={{
                      background: "transparent",
                      color: "#fff",
                      border: "2px solid #fff",
                      padding: "0.8rem 1.8rem",
                      borderRadius: 4,
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      marginBottom: "1rem",
                      transition: "all 0.3s",
                      letterSpacing: "0.5px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#3a4e47";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    VIEW MONTHLY CALENDAR
                  </button>
                  <div style={{ fontSize: "0.85rem", color: "#bbb" }}>
                    Powered by{" "}
                    <span style={{ fontWeight: "bold" }}>Masjidal</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Services */}
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "2.5rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                {/* Left Services */}
                <div>
                  <ServiceCategory
                    title="Prayer Facilities"
                    icon="🕌"
                    items={[
                      "Separate prayer Halls/Room and entrances for Brothers and Sisters",
                    ]}
                  />
                  <ServiceCategory
                    title="Spiritual Services"
                    icon="✨"
                    items={[
                      "Five Daily Prayers (Salah)",
                      "Jumu'ah (Friday) Prayer",
                      "Taraweeh Prayers (Ramadan)",
                      "Qiyam-ul-Lail (Night Prayers)",
                      "Eid Prayers",
                    ]}
                  />
                  <ServiceCategory
                    title="Youth & Community Engagement"
                    icon="🤝"
                    items={[
                      "Youth Programs & Camps",
                      "Sports & Recreational Activities",
                      "Community Iftars (during Ramadan)",
                      "Family Nights",
                      "Counseling Services",
                      "Volunteer Opportunities",
                    ]}
                  />
                </div>

                {/* Right Services */}
                <div>
                  <ServiceCategory
                    title="Educational Programs"
                    icon="📚"
                    items={[
                      "Maktab for Children (Weekday & Weekend)",
                      "Hifz Programs",
                      "Tafsir & Hadith Classes",
                      "Adult Islamic Education",
                      "Arabic Language Courses",
                      "Workshops & Seminars",
                    ]}
                  />
                  <ServiceCategory
                    title="Social Services"
                    icon="❤️"
                    items={[
                      "Food Bank",
                      "Sadaqah & Zakat Distribution",
                      "Support for New Muslims (Reverts)",
                      "Refugee & Immigrant Support",
                      "Health Clinics",
                    ]}
                  />
                </div>
              </div>

              {/* Bottom CTA and Donation */}
              <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "#2d5238",
                    marginBottom: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  All are welcome! Join us in building a vibrant, faith-filled
                  community
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 30,
                    flexWrap: "wrap",
                  }}
                >
                  <Image
                    src="/qr-code.png"
                    alt="Donation QR Code"
                    width={110}
                    height={110}
                    style={{ border: "2px solid #333" }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "bold",
                        color: "#1976d2",
                      }}
                    >
                      E-Transfer:{" "}
                      <a
                        href="mailto:nouh.icc@gmail.com"
                        style={{ color: "#1976d2", textDecoration: "none" }}
                      >
                        nouh.icc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Section 2: WhatsApp Group, Support, and Upcoming Events */}
      <section style={{ background: "#fff", padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* WhatsApp Group */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 120,
                  height: 120,
                  background: "#25D366",
                  borderRadius: "50%",
                  marginBottom: "1.5rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div style={{ textAlign: "center", color: "#fff" }}>
                  <div style={{ fontSize: "2.  5rem", marginBottom: "0.2rem" }}>
                    <svg
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="currentColor"
                    >
                      <path d="M17.  472 14. 382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.  149.198 2.096 3.2 5.077 4.487. 709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-. 694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.  004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.  235-. 374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .  16 5.335. 157 11.892c0 2.096.547 4.142 1.588 5.945L.  057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                    JOIN
                  </div>
                </div>
              </div>
            </a>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#222",
                margin: 0,
              }}
            >
              WhatsApp GROUP
            </h2>
          </div>

          {/* Support the Masjid */}
          <div
            style={{
              background: "#3d6e4a",
              padding: "3rem 2rem",
              marginBottom: "0",
            }}
          >
            <h2
              style={{
                fontSize: "2. 5rem",
                fontWeight: "500",
                color: "#fff",
                margin: "0 0 2rem 0",
                fontFamily: "Georgia, serif",
                textAlign: "left",
              }}
            >
              Support the Masjid
            </h2>
            <div
              style={{
                background: "#fff",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  color: "#222",
                  margin: "0 0 2.5rem 0",
                  fontWeight: "400",
                }}
              >
                Your donations help us maintain the mosque and fund community
                programs.
              </p>
              <Image
                src="/qr-code.png"
                alt="Donation QR Code"
                width={250}
                height={250}
                style={{ border: "2px solid #333" }}
              />
            </div>
          </div>

          {/* Upcoming Events */}
          <div
            style={{
              background: "#3d6e4a",
              padding: "3rem 2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "500",
                color: "#fff",
                margin: "0 0 2rem 0",
                fontFamily: "Georgia, serif",
                textAlign: "left",
              }}
            >
              Upcoming Events
            </h2>
            <div style={{ background: "#fff", padding: "3rem 2rem" }}>
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  color: "#222",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                Join us for weekly Quran classes and community gatherings.
              </p>
            </div>
          </div>

          {/* Find Us */}
          <div
            style={{
              background: "#3d6e4a",
              padding: "3rem 2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "500",
                color: "#fff",
                margin: "0 0 2rem 0",
                fontFamily: "Georgia, serif",
                textAlign: "left",
              }}
            >
              FIND US
            </h2>
            <div
              style={{ background: "#fff", padding: "0", overflow: "hidden" }}
            >
              {/* Street View and Map Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                }}
              >
                {/* Left - Street View Image Placeholder */}
                <div
                  style={{
                    background: "#ddd",
                    minHeight: "500px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Placeholder for street view image */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "#fff",
                      padding: "0.8rem 2rem",
                      borderRadius: 25,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      zIndex: 10,
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", color: "#666" }}>
                      📍
                    </span>
                    <input
                      type="text"
                      value="2480 Kingston Rd"
                      readOnly
                      style={{
                        border: "none",
                        outline: "none",
                        fontSize: "1rem",
                        color: "#333",
                        width: "200px",
                        background: "transparent",
                      }}
                    />
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        color: "#666",
                      }}
                    >
                      🔍
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        color: "#666",
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Street View Image - Replace with actual image */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#ccc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#666",
                      fontSize: "1.2rem",
                    }}
                  >
                    {/* Replace this with actual street view image */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom, #e0e0e0, #f5f5f5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "600",
                      }}
                    >
                      Street View Image Placeholder
                      <br />
                      Add /street-view. jpg
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "#fff",
                      padding: "1.5rem 2rem",
                      borderTop: "1px solid #ddd",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        color: "#333",
                        margin: "0 0 1rem 0",
                        fontWeight: "600",
                      }}
                    >
                      2480 Kingston Rd
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <ActionButton icon="🧭" label="Directions" primary />
                      <ActionButton icon="🔖" label="Save" />
                      <ActionButton icon="🔍" label="Nearby" />
                      <ActionButton icon="📱" label="Send to phone" />
                      <ActionButton icon="↗️" label="Share" />
                    </div>
                  </div>
                </div>

                {/* Right - Map Placeholder */}
                <div
                  style={{
                    background: "#e5e7eb",
                    minHeight: "500px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Top Search Bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      right: "1rem",
                      background: "#fff",
                      padding: "0.8rem 1rem",
                      borderRadius: 8,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      zIndex: 10,
                    }}
                  >
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <FilterButton icon="🍽️" label="Restaurants" />
                      <FilterButton icon="🏨" label="Hotels" />
                      <FilterButton icon="📸" label="Things to do" />
                      <FilterButton icon="🚌" label="Transit" />
                    </div>
                  </div>

                  {/* Map Placeholder - Replace with Google Maps embed */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#d1d5db",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#666",
                      fontSize: "1.2rem",
                    }}
                  >
                    {/* Replace with Google Maps iframe */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right, #e5e7eb, #d1d5db)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "600",
                      }}
                    >
                      Google Maps Embed Placeholder
                      <br />
                      Add iframe or component
                    </div>
                  </div>

                  {/* Red Pin Marker */}
                  <div
                    style={{
                      position: "absolute",
                      top: "45%",
                      left: "50%",
                      transform: "translate(-50%, -100%)",
                      fontSize: "3rem",
                      zIndex: 5,
                    }}
                  >
                    📍
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Background Image */}
      <footer
        style={{
          background:
            "linear-gradient(to bottom, #f5f5e6 0%, #f5f5e6 70%, #3d6e4a 70%, #3d6e4a 100%)",
          padding: "4rem 2rem 2rem 2rem",
          position: "relative",
          backgroundImage: "url('/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Mosque Silhouette Overlay */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            bottom: 0,
            width: "300px",
            height: "200px",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 300 200" style={{ width: "100%", height: "100%" }}>
            <g fill="#2d5238">
              {/* Main dome */}
              <ellipse cx="150" cy="100" rx="50" ry="35" />
              <rect x="125" y="100" width="50" height="100" />
              {/* Left dome */}
              <ellipse cx="80" cy="120" rx="30" ry="20" />
              <rect x="65" y="120" width="30" height="80" />
              {/* Right dome */}
              <ellipse cx="220" cy="120" rx="30" ry="20" />
              <rect x="205" y="120" width="30" height="80" />
              {/* Minarets */}
              <rect x="30" y="80" width="12" height="120" />
              <circle cx="36" cy="75" r="8" />
              <path d="M 36 67 L 33 60 L 39 60 Z" />
              <rect x="258" y="80" width="12" height="120" />
              <circle cx="264" cy="75" r="8" />
              <path d="M 264 67 L 261 60 L 267 60 Z" />
              {/* Crescent */}
              <path d="M 150 85 Q 155 75 150 65 Q 158 75 150 85 Z" />
            </g>
          </svg>
        </div>

        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "1.6rem",
              color: "#333",
              marginBottom: "1rem",
              fontFamily: "Georgia, serif",
            }}
          >
            2480 Kingston Road, Scarborough, ON, M1L 1V3
          </div>
          <div
            style={{
              fontSize: "1.4rem",
              color: "#1976d2",
              fontWeight: "500",
            }}
          >
            <a
              href="mailto: Nouh.icc@gmail.com"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              Nouh.icc@gmail.com
            </a>{" "}
            | Phone: (123) 456-7890
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          main > div > div {
            grid-template-columns: 1fr !important;
          }
          main>div > div > div: last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 968px) {
          section > div > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          nav ul {
            gap: 0 !important;
          }
          nav ul li a {
            padding: 0.6rem 1rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}

function ServiceCategory({ title, icon, items }) {
  return (
    <div style={{ marginBottom: "1. 8rem" }}>
      <h3
        style={{
          color: "#1976d2",
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginBottom: "0.7rem",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ fontSize: "1.2rem" }}>{icon}</span>
        {title}
      </h3>
      <ul style={{ margin: 0, paddingLeft: "1.3rem" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "0.45rem",
              color: "#444",
              fontSize: "0.95rem",
              lineHeight: "1.5",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionButton({ icon, label, primary = false }) {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: primary ? "#3b82f6" : "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: primary ? "#fff" : "#333",
          fontSize: "1.5rem",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: "0.85rem", color: "#666" }}>{label}</span>
    </button>
  );
}

function FilterButton({ icon, label }) {
  return (
    <button
      style={{
        background: "#f3f4f6",
        border: "1px solid #d1d5db",
        padding: "0.5rem 1rem",
        borderRadius: 20,
        fontSize: "0.9rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 5,
        whiteSpace: "nowrap",
      }}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
