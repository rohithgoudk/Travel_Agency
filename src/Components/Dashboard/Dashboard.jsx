import { useState } from "react";
import {
  FaBell, FaSearch, FaPlane, FaMapMarkerAlt, FaStar,
  FaCheckCircle, FaClock, FaTimesCircle, FaArrowUp, FaArrowDown,
  FaHotel, FaRoute, FaSuitcase, FaWallet, FaTrophy,
  FaChevronRight, FaEllipsisH, FaDownload, FaEdit,
  FaUmbrella, FaPassport, FaCamera, FaMobileAlt
} from "react-icons/fa";
import { WiDaySunny, WiHumidity, WiStrongWind } from "react-icons/wi";
import Sidebar from "../SideBar/SideBar";
import "./Dashboard.css";

const bookings = [
  { id:1, emoji:"🇦🇪", dest:"Dubai, UAE",       type:"Flight",  date:"20 Jun 2026", amount:"₹18,500", status:"Confirmed" },
  { id:2, emoji:"🇹🇭", dest:"Bangkok, Thailand", type:"Package", date:"15 Aug 2026", amount:"₹42,000", status:"Pending"   },
  { id:3, emoji:"🇲🇻", dest:"Maldives",          type:"Hotel",   date:"10 Sep 2026", amount:"₹65,000", status:"Confirmed" },
  { id:4, emoji:"🇸🇬", dest:"Singapore",         type:"Flight",  date:"05 Oct 2026", amount:"₹12,200", status:"Cancelled" },
  { id:5, emoji:"🇯🇵", dest:"Tokyo, Japan",      type:"Package", date:"22 Nov 2026", amount:"₹88,000", status:"Pending"   },
];

const statusMeta = {
  Confirmed: { cls:"status--confirmed", dot:"status-dot--confirmed" },
  Pending:   { cls:"status--pending",   dot:"status-dot--pending"   },
  Cancelled: { cls:"status--cancelled", dot:"status-dot--cancelled" },
};

const activities = [
  { icon:"green",  emoji:"✅", msg:<>Booking confirmed for <strong>Bali, Indonesia</strong> — 15 Jul 2026</>,  time:"2 hours ago" },
  { icon:"indigo", emoji:"✈️", msg:<>Check-in opened for <strong>Dubai flight</strong> 6E-194</>,              time:"Yesterday"   },
  { icon:"amber",  emoji:"🎁", msg:<><strong>140 loyalty points</strong> added to your account</>,             time:"2 days ago"  },
  { icon:"red",    emoji:"⚠️", msg:<>Passport expiry reminder — renew before <strong>Dec 2026</strong></>,     time:"3 days ago"  },
  { icon:"indigo", emoji:"🏨", msg:<>Hotel check-in confirmed at <strong>The Layar Villas, Bali</strong></>,   time:"4 days ago"  },
];

const checklist = [
  { label:"Book airport transfer",          done: true  },
  { label:"Download offline maps",          done: true  },
  { label:"Purchase travel insurance",      done: true  },
  { label:"Pack essentials bag",            done: false },
  { label:"Notify bank about travel",       done: false },
  { label:"Check visa requirements",        done: false },
];

const miniCards = [
  { icon: <FaWallet />, iconCls:"stat-icon--indigo", label:"Budget used", value:"₹74,000", sub:"of ₹1,50,000", bar: 49, barCls:"mini-bar-fill--indigo" },
  { icon: <FaRoute />,  iconCls:"stat-icon--teal",   label:"Km travelled", value:"18,420",  sub:"this year",    bar: 73, barCls:"mini-bar-fill--teal"   },
  { icon: <FaTrophy />, iconCls:"stat-icon--amber",  label:"Loyalty points", value:"860",   sub:"180 to Gold+", bar: 86, barCls:"mini-bar-fill--amber"  },
];

const recommended = [
  { cls:"reco-image--paris",    emoji:"🗼", name:"Paris",     country:"France",  rating:4.9, price:"₹85,000", tag:"Trending", tagCls:"reco-tag--hot"    },
  { cls:"reco-image--kyoto",    emoji:"⛩",  name:"Kyoto",     country:"Japan",   rating:4.8, price:"₹92,000", tag:"Popular",  tagCls:"reco-tag--new"    },
  { cls:"reco-image--santorini",emoji:"🏛",  name:"Santorini", country:"Greece",  rating:4.7, price:"₹1,10,000",tag:"Luxury",  tagCls:"reco-tag--luxury" },
];

export default function UserDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [checkDone, setCheckDone] = useState(checklist.map(c => c.done));

  const doneCount = checkDone.filter(Boolean).length;
  const checkPct  = Math.round((doneCount / checklist.length) * 100);

  return (
    <div className="dashboard-layout">
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} />

      <main className="dashboard-main">

        {/* ── Topbar ── */}
        <header className="topbar">
          <div className="topbar-left">
            <div className="topbar-breadcrumb">
              Dashboard <FaChevronRight /> <span>Overview</span>
            </div>
          </div>

          <div className="search-wrap">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search destinations, bookings, flights…" />
          </div>

          <div className="topbar-right">
            <button className="icon-btn" aria-label="Notifications">
              <FaBell />
              <span className="badge">3</span>
            </button>
            <button className="icon-btn" aria-label="Download">
              <FaDownload />
            </button>
            <div className="topbar-profile">
              <div className="topbar-avatar">AK</div>
              <span className="topbar-name">Arjun</span>
              <FaChevronRight className="topbar-chevron" />
            </div>
          </div>
        </header>

        {/* ── Page body ── */}
        <div className="page-body">

          {/* Welcome hero */}
          <div className="welcome-hero">
            <div className="welcome-text">
              <div className="welcome-eyebrow">Wednesday, 10 June 2026</div>
              <h1 className="welcome-title">Good morning, Arjun 👋</h1>
              <p className="welcome-sub">You have 3 upcoming trips and 860 loyalty points to spend.<br/>Your Bali adventure is 35 days away.</p>
              <div className="welcome-actions">
                <button className="btn-primary"><FaPlane /> Book a trip</button>
                <button className="btn-ghost"><FaRoute /> View itineraries</button>
              </div>
            </div>

            <div className="welcome-next-trip">
              <div className="next-label">Next departure</div>
              <div className="next-dest">✈ Bali, Indonesia</div>
              <div className="next-date">15 July 2026 · IndiGo 6E-214</div>
              <div className="next-countdown">
                <div className="countdown-box"><span className="countdown-num">35</span><span className="countdown-unit">Days</span></div>
                <span className="countdown-sep">:</span>
                <div className="countdown-box"><span className="countdown-num">14</span><span className="countdown-unit">Hrs</span></div>
                <span className="countdown-sep">:</span>
                <div className="countdown-box"><span className="countdown-num">22</span><span className="countdown-unit">Min</span></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {[
              { cardCls:"stat-card--indigo", iconCls:"stat-icon--indigo", icon:<FaPlane />,    value:"12",        label:"Total Trips",     sub:"↑ 2 added this year",  trend:"up",   trendVal:"+2" },
              { cardCls:"stat-card--teal",   iconCls:"stat-icon--teal",   icon:<FaSuitcase />, value:"3",         label:"Upcoming Trips",  sub:"Next in 35 days",      trend:"up",   trendVal:"+1" },
              { cardCls:"stat-card--amber",  iconCls:"stat-icon--amber",  icon:<FaWallet />,   value:"₹1,24,000", label:"Total Spent",     sub:"₹18k this month",      trend:"down", trendVal:"-8%" },
              { cardCls:"stat-card--rose",   iconCls:"stat-icon--rose",   icon:<FaTrophy />,   value:"860",       label:"Loyalty Points",  sub:"180 pts to Gold+",     trend:"up",   trendVal:"+140" },
            ].map((s, i) => (
              <div className={`stat-card ${s.cardCls}`} key={i}>
                <div className="stat-header">
                  <div className={`stat-icon ${s.iconCls}`}>{s.icon}</div>
                  <span className={`stat-trend ${s.trend}`}>
                    {s.trend === "up" ? <FaArrowUp /> : <FaArrowDown />} {s.trendVal}
                  </span>
                </div>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Mini progress cards */}
          <div className="mini-cards-row">
            {miniCards.map((m, i) => (
              <div className="mini-card" key={i}>
                <div className="mini-card-header">
                  <div className={`stat-icon ${m.iconCls}`} style={{width:36,height:36}}>{m.icon}</div>
                  <button className="mini-card-more" aria-label="Options"><FaEllipsisH /></button>
                </div>
                <div>
                  <div className="mini-card-value">{m.value}</div>
                  <div className="mini-card-label">{m.label} · {m.sub}</div>
                </div>
                <div className="mini-bar-wrap">
                  <div className="mini-bar-labels"><span>0</span><span>{m.bar}%</span></div>
                  <div className="mini-bar"><div className={`mini-bar-fill ${m.barCls}`} style={{width:`${m.bar}%`}} /></div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming trip + Donut */}
          <div className="two-col-grid">

            {/* Upcoming trip card */}
            <div className="card upcoming-card">
              <div className="card-header">
                <h2><span className="card-icon"><FaMapMarkerAlt /></span> Upcoming journey</h2>
                <button className="link-btn">Manage →</button>
              </div>
              <div className="card-body">
                <div className="trip-hero">
                  <div className="trip-hero-left">
                    <div className="trip-hero-eyebrow">Confirmed booking</div>
                    <div className="trip-hero-dest">🌴 Bali, Indonesia</div>
                    <div className="trip-hero-dates">15 Jul – 22 Jul 2026 · 7 nights</div>
                  </div>
                  <div className="trip-hero-status">✓ Confirmed</div>
                </div>
                <div className="trip-details">
                  <div className="trip-detail-item">
                    <div className="trip-detail-label">✈ Flight</div>
                    <div className="trip-detail-value">IndiGo 6E-194</div>
                  </div>
                  <div className="trip-detail-item">
                    <div className="trip-detail-label">🏨 Hotel</div>
                    <div className="trip-detail-value">The Layar Villas</div>
                  </div>
                  <div className="trip-detail-item">
                    <div className="trip-detail-label">👥 Travellers</div>
                    <div className="trip-detail-value">2 Adults</div>
                  </div>
                </div>
                <div className="trip-actions">
                  <button className="btn-primary" style={{fontSize:'0.8rem',padding:'8px 16px'}}><FaDownload /> Boarding pass</button>
                  <button className="btn-outline"><FaEdit /> Edit booking</button>
                </div>
              </div>
            </div>

            {/* Travel goal donut */}
            <div className="card">
              <div className="card-header">
                <h2><span className="card-icon"><FaRoute /></span> Travel goal 2026</h2>
              </div>
              <div className="card-body" style={{padding:'18px 22px 22px',display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
                <div className="donut-wrap">
                  <svg viewBox="0 0 120 120" className="donut-svg">
                    <circle cx="60" cy="60" r="52" className="donut-bg" />
                    <circle cx="60" cy="60" r="52" className="donut-fill" />
                  </svg>
                  <div className="donut-label">
                    <div className="donut-pct">63%</div>
                    <div className="donut-sub">Done</div>
                  </div>
                </div>
                <div className="donut-legend" style={{width:'100%'}}>
                  {[
                    { dot:"legend-dot--indigo", label:"Completed trips", val:"5" },
                    { dot:"legend-dot--gray",   label:"Remaining",       val:"3" },
                  ].map((l) => (
                    <div className="legend-row" key={l.label}>
                      <span className="legend-dot-label">
                        <span className={`legend-dot ${l.dot}`} />
                        {l.label}
                      </span>
                      <span className="legend-val">{l.val}</span>
                    </div>
                  ))}
                  <div style={{marginTop:12,background:'var(--surface-2)',borderRadius:'var(--radius-md)',padding:'12px'}}>
                    <div style={{fontSize:'0.72rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.6px'}}>Countries visited</div>
                    <div style={{fontSize:'1.3rem',fontWeight:800,color:'var(--text-primary)',marginTop:3}}>9 🌍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="section-label">Bookings & Activity</div>

          {/* Bookings + Activity feed */}
          <div className="two-col-grid" style={{gridTemplateColumns:'1.6fr 1fr'}}>

            {/* Bookings table */}
            <div className="card bookings-card">
              <div className="card-header">
                <h2><span className="card-icon"><FaSuitcase /></span> Recent bookings</h2>
                <button className="link-btn">View all →</button>
              </div>
              <div className="card-body">
                <div className="table-wrap">
                  <table className="bookings-table">
                    <thead>
                      <tr>
                        <th>Destination</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((b) => {
                        const s = statusMeta[b.status];
                        return (
                          <tr key={b.id}>
                            <td>
                              <div className="dest-cell">
                                <div className="dest-thumb">{b.emoji}</div>
                                <div>
                                  <div className="dest-name">{b.dest}</div>
                                  <div className="dest-sub">{b.type}</div>
                                </div>
                              </div>
                            </td>
                            <td><span className="type-pill">{b.type}</span></td>
                            <td>{b.date}</td>
                            <td><span className="amount-cell">{b.amount}</span></td>
                            <td>
                              <span className={`status-pill ${s.cls}`}>
                                <span className={`status-dot ${s.dot}`} />
                                {b.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="card">
              <div className="card-header">
                <h2><span className="card-icon">🔔</span> Recent activity</h2>
                <button className="link-btn">All →</button>
              </div>
              <div className="activity-list">
                {activities.map((a, i) => (
                  <div className="activity-item" key={i}>
                    <div className={`activity-icon activity-icon--${a.icon}`}>{a.emoji}</div>
                    <div className="activity-text">
                      <div className="activity-msg">{a.msg}</div>
                      <div className="activity-time">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="section-label">Explore & Plan</div>

          {/* Recommended + Weather + Checklist */}
          <div className="two-col-grid" style={{gridTemplateColumns:'2fr 1fr'}}>

            {/* Recommended destinations */}
            <div className="card">
              <div className="card-header">
                <h2><span className="card-icon"><FaMapMarkerAlt /></span> Recommended for you</h2>
                <button className="link-btn">Explore more →</button>
              </div>
              <div className="reco-grid">
                {recommended.map((r) => (
                  <div className="reco-card" key={r.name}>
                    <div className={`reco-image ${r.cls}`} style={{height:100,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.2rem',position:'relative'}}>
                      {r.emoji}
                      <span className={`reco-tag ${r.tagCls}`}>{r.tag}</span>
                    </div>
                    <div className="reco-body">
                      <div className="reco-name">{r.name}</div>
                      <div className="reco-country">{r.country}</div>
                      <div className="reco-meta">
                        <span className="reco-rating"><FaStar /> {r.rating}</span>
                        <span className="reco-price">from {r.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Weather + Checklist stacked */}
            <div style={{display:'flex',flexDirection:'column',gap:16}}>

              {/* Weather */}
              <div className="card weather-card" style={{padding:'20px 22px',display:'flex',flexDirection:'column',gap:14}}>
                <div className="card-header" style={{padding:0,marginBottom:4}}>
                  <h2><span className="card-icon">🌤</span> Bali weather</h2>
                  <span style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>Jul forecast</span>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontSize:'0.78rem',fontWeight:600,color:'var(--text-muted)'}}>Denpasar, Bali</div>
                    <div style={{fontSize:'2.6rem',fontWeight:800,color:'var(--text-primary)',letterSpacing:-1,lineHeight:1}}>28°C</div>
                    <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginTop:2}}>Partly cloudy</div>
                  </div>
                  <div style={{fontSize:'3rem'}}>⛅</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
                  {[{v:'78%',l:'Humidity'},{v:'14 km/h',l:'Wind'},{v:'UV 7',l:'UV Index'}].map(d=>(
                    <div key={d.l} style={{background:'var(--surface-2)',borderRadius:'var(--radius-sm)',padding:'10px',textAlign:'center'}}>
                      <div style={{fontSize:'0.88rem',fontWeight:700,color:'var(--text-primary)'}}>{d.v}</div>
                      <div style={{fontSize:'0.65rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px',marginTop:2}}>{d.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packing checklist */}
              <div className="card checklist-card" style={{flex:1}}>
                <div className="card-header">
                  <h2><span className="card-icon"><FaSuitcase /></span> Packing list</h2>
                  <span style={{fontSize:'0.72rem',color:'var(--text-muted)',fontWeight:600}}>{doneCount}/{checklist.length}</span>
                </div>
                <div className="card-body">
                  <div className="checklist">
                    {checklist.map((item, i) => (
                      <div
                        key={i}
                        className={`checklist-item${checkDone[i] ? " done" : ""}`}
                        onClick={() => setCheckDone(prev => prev.map((v,j) => j===i ? !v : v))}
                      >
                        <div className="check-box">{checkDone[i] && "✓"}</div>
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="mini-bar-wrap" style={{marginTop:14}}>
                    <div className="mini-bar-labels">
                      <span>Progress</span><span>{checkPct}%</span>
                    </div>
                    <div className="mini-bar">
                      <div className="mini-bar-fill mini-bar-fill--teal" style={{width:`${checkPct}%`}} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>{/* /page-body */}
      </main>
    </div>
  );
}