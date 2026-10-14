"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Search,
  Bell,
  MapPin,
  Star,
  Sparkles,
  ShieldCheck,
  Users,
  CalendarCheck,
  Headphones,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  Wifi,
  Utensils,
  Shirt,
  BookOpen,
  Car,
  Home as HomeIcon,
  Building,
  Coffee,
  Award,
  User,
  Settings,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

export default function StudentPGPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stayType, setStayType] = useState({ hostel: true, pg: true });
  const [genderFilter, setGenderFilter] = useState({ boys: false, girls: false, both: false });
  const [selectedGenderDropdown, setSelectedGenderDropdown] = useState("All Genders");
  const [priceRange, setPriceRange] = useState(75000);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedAmenities, setSelectedAmenities] = useState({
    WiFi: false,
    Mess: false,
    Laundry: false,
    "Study Room": false,
    Security: false,
    Parking: false,
  });
  const [selectedSort, setSelectedSort] = useState("Rating");

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building, active: true },
    { label: "Cafe", href: "/student/cafes", icon: Coffee },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "About", href: "/student/about", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const hostels = [
    {
      id: "goodluck-hostel",
      name: "Goodluck",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.2",
      location: "Dehu Phata",
      price: "65,000",
      rawPrice: 65000,
      amenities: ["Mess", "WiFi", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "sai-dham",
      name: "Sai Dham",
      type: "Hostel",
      gender: "Girls Hostel",
      genderColor: "bg-[#EC4899] text-white",
      rating: "4.5",
      location: "Near MIT - AOE",
      price: "68,000",
      rawPrice: 68000,
      amenities: ["Mess", "WiFi", "Laundry", "Study Room"],
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "classmate-hostel",
      name: "Classmate",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.0",
      location: "Near gajanan maharaj mandir",
      price: "72,000",
      rawPrice: 72000,
      amenities: ["Mess", "WiFi", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "manas-hostel",
      name: "Manas",
      type: "Hostel",
      gender: "Girls Hostel",
      genderColor: "bg-[#EC4899] text-white",
      rating: "4.3",
      location: "Near gajanan maharaj mandir",
      price: "64,000",
      rawPrice: 64000,
      amenities: ["Mess", "WiFi", "Laundry", "Study Room"],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "rajmata-hostel",
      name: "Rajmata",
      type: "Hostel",
      gender: "Girls Hostel",
      genderColor: "bg-[#EC4899] text-white",
      rating: "4.1",
      location: "Indrayani Nagar",
      price: "66,000",
      rawPrice: 66000,
      amenities: ["Mess", "WiFi", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "mathura-hostel",
      name: "Mathura",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.4",
      location: "Vishweshwar Nagar",
      price: "70,000",
      rawPrice: 70000,
      amenities: ["Mess", "WiFi", "Laundry", "Study Room"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "chaitanya-boys-hostel",
      name: "Chaitanya",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.0",
      location: "Dehu - Alandi Rd, Pahat, Alandi",
      price: "50,000",
      rawPrice: 50000,
      amenities: ["Mess", "WiFi", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "tuljai-pg",
      name: "Tuljai PG and Hostel",
      type: "PG",
      gender: "Girls Hostel",
      genderColor: "bg-[#EC4899] text-white",
      rating: "4.2",
      location: "Near Kale Residency, Vishweshwar Nagar",
      price: "65,000",
      rawPrice: 65000,
      amenities: ["Mess", "WiFi", "Laundry", "Study Room"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "vasanti-hostel",
      name: "Vasanti",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.3",
      location: "Dehu Phata, Alandi",
      price: "68,000",
      rawPrice: 68000,
      amenities: ["Mess", "WiFi", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "dhananjay-hostel",
      name: "Dhananjay",
      type: "Hostel",
      gender: "Boys Hostel",
      genderColor: "bg-[#2563EB] text-white",
      rating: "4.1",
      location: "Opp. MIT College, Hinjewadi",
      price: "66,000",
      rawPrice: 66000,
      amenities: ["Mess", "WiFi", "Laundry", "Parking"],
      image: "https://images.unsplash.com/photo-1596276020587-8044fe049813?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "pearl-paradise",
      name: "Pearl Paradise",
      type: "Hostel",
      gender: "Girls Hostel",
      genderColor: "bg-[#EC4899] text-white",
      rating: "4.5",
      location: "DhyanYog Apartment, Dehu - Alandi Rd.",
      price: "68,000",
      rawPrice: 68000,
      amenities: ["Mess", "WiFi", "Security", "Study Room"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=80",
    },
  ];

  const handleResetFilters = () => {
    setSearchTerm("");
    setStayType({ hostel: true, pg: true });
    setGenderFilter({ boys: false, girls: false, both: false });
    setSelectedGenderDropdown("All Genders");
    setPriceRange(75000);
    setSelectedLocation("All Locations");
    setSelectedSort("Rating");
    setSelectedAmenities({
      WiFi: false,
      Mess: false,
      Laundry: false,
      "Study Room": false,
      Security: false,
      Parking: false,
    });
  };

  const renderAmenityIcon = (name) => {
    switch (name) {
      case "Mess":
        return <Utensils className="w-3 h-3 text-[#6C47FF]" />;
      case "WiFi":
        return <Wifi className="w-3 h-3 text-[#6C47FF]" />;
      case "Laundry":
        return <Shirt className="w-3 h-3 text-[#6C47FF]" />;
      case "Security":
        return <ShieldCheck className="w-3 h-3 text-[#6C47FF]" />;
      case "Study Room":
        return <BookOpen className="w-3 h-3 text-[#6C47FF]" />;
      case "Parking":
        return <Car className="w-3 h-3 text-[#6C47FF]" />;
      default:
        return <ShieldCheck className="w-3 h-3 text-[#6C47FF]" />;
    }
  };

  // Live Comprehensive Filter & Sort Logic
  const filteredHostels = hostels
    .filter((item) => {
      // 1. Search Query
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query);

      // 2. Type Filter (Hostel / PG)
      let matchesType = true;
      if (stayType.hostel && !stayType.pg) {
        matchesType = item.type === "Hostel" || !item.name.toLowerCase().includes("pg");
      } else if (!stayType.hostel && stayType.pg) {
        matchesType = item.type === "PG" || item.name.toLowerCase().includes("pg");
      } else if (!stayType.hostel && !stayType.pg) {
        matchesType = false;
      }

      // 3. Gender Filter (Top Dropdown + Sidebar Checkboxes)
      let matchesGender = true;
      const genLow = item.gender.toLowerCase();

      if (selectedGenderDropdown === "Boys") {
        matchesGender = genLow.includes("boys");
      } else if (selectedGenderDropdown === "Girls") {
        matchesGender = genLow.includes("girls");
      }

      const activeGenderChecks = [];
      if (genderFilter.boys) activeGenderChecks.push("boys");
      if (genderFilter.girls) activeGenderChecks.push("girls");
      if (genderFilter.both) activeGenderChecks.push("both");

      if (activeGenderChecks.length > 0) {
        matchesGender =
          matchesGender &&
          activeGenderChecks.some((g) => (g === "both" ? true : genLow.includes(g)));
      }

      // 4. Price Filter
      const matchesPrice = item.rawPrice <= Number(priceRange);

      // 5. Location Filter
      let matchesLocation = true;
      if (selectedLocation !== "All Locations" && selectedLocation !== "Select location") {
        matchesLocation = item.location.toLowerCase().includes(selectedLocation.toLowerCase());
      }

      // 6. Amenities Filter
      const activeAmenities = Object.entries(selectedAmenities)
        .filter(([_, checked]) => checked)
        .map(([amenity]) => amenity);

      let matchesAmenities = true;
      if (activeAmenities.length > 0) {
        matchesAmenities = activeAmenities.every((amenity) =>
          item.amenities.includes(amenity)
        );
      }

      return (
        matchesSearch &&
        matchesType &&
        matchesGender &&
        matchesPrice &&
        matchesLocation &&
        matchesAmenities
      );
    })
    .sort((a, b) => {
      if (selectedSort === "Rating") {
        return parseFloat(b.rating) - parseFloat(a.rating);
      } else if (selectedSort === "Price: Low to High") {
        return a.rawPrice - b.rawPrice;
      } else if (selectedSort === "Price: High to Low") {
        return b.rawPrice - a.rawPrice;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* HERO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 pt-6 pb-4">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#EDE9FE] via-[#F5F3FF] to-[#FAF5FF] border border-purple-100 p-8 md:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="absolute top-6 left-1/3 hidden md:block text-[#6C47FF] text-xs font-bold rotate-[-10deg] pointer-events-none select-none">
            Your <br /> Second Home <br /> Awaits! ッ
          </div>

          <div className="space-y-4 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-200/60 text-[#6C47FF] text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              Hostel &amp; PG
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Find Your Perfect <br />
              <span className="text-[#6C47FF]">Stay Near Campus</span>
            </h1>

            <p className="text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2">
              <span>Safe</span> • <span>Comfortable</span> • <span>Affordable</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6C47FF]" />
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#6C47FF]" />
                <span>Gender Specific</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-[#6C47FF]" />
                <span>Easy Booking</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <div className="w-64 h-56 md:w-72 md:h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80"
                alt="Modern Student Hostel Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-72 bg-gradient-to-br from-[#818CF8] via-[#6366F1] to-[#4F46E5] text-white rounded-[28px] p-6 shadow-xl space-y-3 z-10 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm">Need Help?</h4>
                <p className="text-[11px] text-white/80 leading-tight">
                  Our support team is always here for you.
                </p>
              </div>
            </div>

            <Link
              href="/support"
              className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-md"
            >
              <span className="text-slate-900 font-extrabold">Contact Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6C47FF]" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN WORKSPACE */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                  Filter Hostels &amp; PGs
                </h3>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-[11px] font-bold text-[#6C47FF] hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Type Filter */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Type</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 font-medium">Hostel</span>
                    <input
                      type="checkbox"
                      checked={stayType.hostel}
                      onChange={(e) => setStayType({ ...stayType, hostel: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 font-medium">PG</span>
                    <input
                      type="checkbox"
                      checked={stayType.pg}
                      onChange={(e) => setStayType({ ...stayType, pg: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                  </label>
                </div>
              </div>

              {/* Gender Filter */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Gender</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2.5 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={genderFilter.boys}
                      onChange={(e) =>
                        setGenderFilter({ ...genderFilter, boys: e.target.checked })
                      }
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="text-[#2563EB] font-bold">👤 Boys</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={genderFilter.girls}
                      onChange={(e) =>
                        setGenderFilter({ ...genderFilter, girls: e.target.checked })
                      }
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="text-[#EC4899] font-bold">👤 Girls</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={genderFilter.both}
                      onChange={(e) =>
                        setGenderFilter({ ...genderFilter, both: e.target.checked })
                      }
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="text-purple-600 font-bold">👥 Both</span>
                  </label>
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">
                  Price Range (Yearly)
                </label>
                <input
                  type="range"
                  min="40000"
                  max="75000"
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#6C47FF] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>₹40,000</span>
                  <span>Up to ₹{Number(priceRange).toLocaleString()}</span>
                </div>
              </div>

              {/* Location Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Location</label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl p-3 appearance-none focus:outline-none cursor-pointer"
                  >
                    <option>All Locations</option>
                    <option>Dehu Phata</option>
                    <option>Near MIT - AOE</option>
                    <option>Indrayani Nagar</option>
                    <option>Vishweshwar Nagar</option>
                    <option>Hinjewadi</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Amenities</label>
                <div className="space-y-2 text-xs">
                  {["WiFi", "Mess", "Laundry", "Study Room", "Security", "Parking"].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAmenities[amenity]}
                        onChange={(e) =>
                          setSelectedAmenities({
                            ...selectedAmenities,
                            [amenity]: e.target.checked,
                          })
                        }
                        className="rounded accent-[#6C47FF]"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply / Reset Button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition"
              >
                Reset All Filters
              </button>
            </div>

            <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
              <div className="text-xs font-extrabold text-indigo-700 rotate-[-4deg]">
                Good Vibes Only ッ
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                🏡
              </div>
            </div>
          </aside>

          {/* CENTER MAIN */}
          <main className="xl:col-span-7 space-y-5">
            {/* Horizontal Search & Selectors Bar */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search hostel / PG by name or locality..."
                  className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              {/* Gender Dropdown */}
              <div className="relative min-w-[125px]">
                <select
                  value={selectedGenderDropdown}
                  onChange={(e) => setSelectedGenderDropdown(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>All Genders</option>
                  <option>Boys</option>
                  <option>Girls</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Location Quick Dropdown */}
              <div className="relative min-w-[130px]">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>All Locations</option>
                  <option>Dehu Phata</option>
                  <option>Near MIT - AOE</option>
                  <option>Indrayani Nagar</option>
                  <option>Vishweshwar Nagar</option>
                  <option>Hinjewadi</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Reset Trigger */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-600 hover:text-[#6C47FF] transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Count & Sort Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-[#6C47FF] flex items-center justify-center text-xs font-black">
                  🏨
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {filteredHostels.length} Hostels &amp; PGs Found
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Sort by</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option>Rating</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Empty State */}
            {filteredHostels.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-2">
                <p className="text-sm font-bold text-slate-700">No hostels or PGs match your filter criteria</p>
                <p className="text-xs text-slate-400">Try adjusting your price range or clearing specific filters.</p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-3 px-5 py-2 rounded-xl bg-purple-50 text-[#6C47FF] text-xs font-extrabold hover:bg-purple-100 transition"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Grid of Cards */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHostels.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image & Header Tags */}
                      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Gender Badge */}
                        <span
                          className={`absolute top-2.5 left-2.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${item.genderColor} shadow-sm`}
                        >
                          {item.gender}
                        </span>

                        {/* Rating Pill */}
                        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[11px] font-black text-slate-900">{item.rating}</span>
                        </div>
                      </div>

                      {/* Title & Location */}
                      <div className="px-1 space-y-1">
                        <h4 className="text-sm font-black text-slate-900 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          {item.location}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="px-1 pt-2 flex items-baseline gap-1">
                        <span className="text-lg font-black text-slate-900">₹{item.price}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">/year</span>
                      </div>

                      {/* Amenities Icons */}
                      <div className="px-1 pt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-600">
                        {item.amenities.map((amenity, aIdx) => (
                          <span
                            key={aIdx}
                            className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-lg px-2 py-0.5"
                          >
                            {renderAmenityIcon(amenity)}
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-4 px-1">
                      <Link
                        href={`/student/pg/${item.id === "manas-hostel" ? "manas" : item.id}`}
                        className="w-full py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-sm"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Promo Stay Banner */}
            <div className="relative rounded-[32px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden mt-6">
              <div className="space-y-2 z-10">
                <div className="text-sm font-black text-[#6C47FF] rotate-[-2deg]">
                  Comfortable Stay <br /> Better Study <br /> Brighter Future ッ
                </div>
              </div>

              <div className="flex items-center gap-6 z-10 shrink-0">
                <div className="w-32 h-24 rounded-2xl bg-white shadow-md p-2 flex items-center justify-center text-4xl">
                  🛏️
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-6 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-black flex items-center gap-2 transition shadow-md shadow-purple-200"
                >
                  <span>Explore All Hostels &amp; PGs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR: QUICK NAV */}
          <aside className="hidden xl:flex flex-col w-64 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm shrink-0 sticky top-24 space-y-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 px-2">
                Quick Nav
              </h4>
              <nav className="space-y-1">
                {sidebarLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`flex items-center gap-3 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all ${
                        item.active
                          ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                          : "text-slate-600 hover:bg-purple-50 hover:text-[#6C47FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-2xl p-4 bg-purple-50 border border-purple-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="text-xs font-black text-slate-900">Need Help?</h4>
                  <p className="text-[10px] text-slate-500">Chat with us</p>
                </div>
              </div>
              <Link
                href="/support"
                className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Live Chat
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-slate-100 py-8 px-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6C47FF] flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm block">Studentica.</span>
              <span className="text-[10px] text-slate-400">Campus Hub</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-900 transition">About Us</Link>
            <Link href="/support" className="hover:text-slate-900 transition">Help &amp; Support</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}