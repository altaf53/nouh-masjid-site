"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
        background: "#fff",
        minHeight: "100vh",
        color: "#222",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          boxShadow: "0 0 10px #eee",
          borderRadius: 8,
          background: "#fff",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
              fontFamily: "serif",
              color: "#000000",
            }}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 12,
            }}
          >
            <Image src="/logo.jpg" alt="Masjid Logo" width={90} height={70} />
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  background: "#e6e6a2",
                  padding: "0.5rem 1rem",
                  borderRadius: 4,
                  color: "#388e3c",
                }}
              >
                NOUH ISLAMIC CENTRE OF CANADA
                <div
                  style={{
                    fontSize: "1rem",
                    marginTop: 2,
                    color: "#000000",
                  }}
                >
                  2480 Kingston Road, Scarborough, ON, M1N 1V3
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#388e3c",
              fontWeight: "bold",
              fontSize: "1.15rem",
              margin: "1rem 0",
            }}
          >
            INSHA-ALLAH --OPENING SOON!
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 260px", minWidth: 220 }}>
            <SectionTitle text="Prayer Facilities" />
            <ul>
              <li>
                Separate prayer Halls/Room and entrances for Brothers and
                Sisters
              </li>
            </ul>
            <SectionTitle text="Spiritual Services" />
            <ul>
              <li>Five Daily Prayers (Salah)</li>
              <li>Jumu&apos;ah (Friday) Prayer</li>
              <li>Taraweeh Prayers (Ramadan)</li>
              <li>Qiyam-ul-Lail (Night Prayers)</li>
              <li>Eid Prayers</li>
            </ul>
            <SectionTitle text="Youth & Community Engagement" />
            <ul>
              <li>Youth Programs & Camps</li>
              <li>Sports & Recreational Activities</li>
              <li>Community Iftars (during Ramadan)</li>
              <li>Family Nights</li>
              <li>Counseling Services</li>
              <li>Volunteer Opportunities</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 260px", minWidth: 220 }}>
            <SectionTitle text="Educational Programs" />
            <ul>
              <li>Maktab for Children (Weekday & Weekend)</li>
              <li>Hifz Programs</li>
              <li>Tafsir &amp; Hadith Classes</li>
              <li>Adult Islamic Education</li>
              <li>Arabic Language Courses</li>
              <li>Workshops &amp; Seminars</li>
            </ul>
            <SectionTitle text="Social Services" />
            <ul>
              <li>Food Bank</li>
              <li>Sadaqah &amp; Zakat Distribution</li>
              <li>Support for New Muslims (Reverts)</li>
              <li>Refugee &amp; Immigrant Support</li>
              <li>Health Clinics</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "#388e3c",
            fontSize: "1.1rem",
          }}
        >
          All are welcome! Join us in building a vibrant, faith-filled community
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Image src="/qr-code.png" alt="QR Code" width={90} height={90} />
          <div>
            <div
              style={{
                color: "#2562b8",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              E-Transfer:{" "}
              <a href="mailto:nouh.icc@gmail.com" style={{ color: "#2562b8" }}>
                nouh.icc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styling */}
      <style jsx>{`
        @media (max-width: 700px) {
          div[style*="maxWidth: 700"] {
            padding: 1rem;
          }
          div[style*="display: flex"][style*="flexWrap: wrap"] {
            flex-direction: column;
            gap: 1rem;
          }
        }
        ul {
          margin: 0 0 1.2em 0;
          padding-left: 1.2em;
        }
        li {
          margin-bottom: 0.4em;
          color: #444;
          font-size: 1em;
          font-weight: 400;
        }
      `}</style>
    </main>
  );
}

function SectionTitle({ text }) {
  return (
    <div
      style={{
        fontWeight: "bold",
        color: "#2562b8",
        margin: "1.1rem 0 0.4rem 0",
        fontSize: "1.05rem",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span style={{ color: "#daa520", fontSize: "1.1em" }}>✨</span>
      {text}
    </div>
  );
}
