import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Models
import Mess from "@/models/mess";
import Vendor from "@/models/Vendor";
import Cafe from "@/models/Cafe";
import Laundry from "@/models/Laundry";
import Hostel from "@/models/Hostel";
import Housekeeping from "@/models/Housekeeping";
import Roommate from "@/models/Roomate";

// Raw Dataset Imports (handles default or named exports)
import * as messFile from "@/dataset/mess";
import * as vendorFile from "@/dataset/vendors";
import * as cafeFile from "@/dataset/cafe";
import * as laundryFile from "@/dataset/laundry";
import * as hostelFile from "@/dataset/hostel";
import * as housekeepingFile from "@/dataset/housekeeping";
import * as roommateFile from "@/dataset/roommates";

function getArrayData(fileModule) {
  if (Array.isArray(fileModule)) return fileModule;
  if (Array.isArray(fileModule.default)) return fileModule.default;
  for (const key of Object.keys(fileModule)) {
    if (Array.isArray(fileModule[key])) return fileModule[key];
  }
  return null;
}

export async function GET() {
  const uri = process.env.MONGODB_URI;

  try {
    // 1. Resolve arrays safely
    const messData = getArrayData(messFile);
    const vendors = getArrayData(vendorFile);
    const cafeData = getArrayData(cafeFile);
    const laundryData = getArrayData(laundryFile);
    const hostelData = getArrayData(hostelFile);
    const housekeepingData = getArrayData(housekeepingFile);
    const roommateData = getArrayData(roommateFile);

    // Diagnostics check to pinpoint any empty or unmatched file
    const datasets = {
      "mess.js": messData,
      "vendors.js": vendors,
      "cafe.js": cafeData,
      "laundry.js": laundryData,
      "hostel.js": hostelData,
      "housekeeping.js": housekeepingData,
      "roommates.js": roommateData,
    };

    for (const [name, data] of Object.entries(datasets)) {
      if (!data) {
        throw new Error(
          `Dataset file "src/dataset/${name}" did not export an array. Please check its export statement.`
        );
      }
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    }

    // 2. Clear existing documents
    await Promise.all([
      Mess.deleteMany({}),
      Vendor.deleteMany({}),
      Cafe.deleteMany({}),
      Laundry.deleteMany({}),
      Hostel.deleteMany({}),
      Housekeeping.deleteMany({}),
      Roommate.deleteMany({}),
    ]);

    // 3. Insert collections
    const [messes, vendorDocs, cafes, laundries, hostels, housekeepingDocs, roommates] =
      await Promise.all([
        Mess.insertMany(
          messData.map((m) => ({
            custom_id: m.id || m.custom_id,
            mess_name: m.mess_name || m.name,
            location: m.location,
            daily_charges: m.daily_charges,
            daily_unit: m.daily_unit,
            monthly_charges: m.monthly_charges,
            monthly_note: m.monthly_note,
            contact: m.contact,
            rating: m.rating,
          }))
        ),
        Vendor.insertMany(
          vendors.map((v) => ({
            custom_id: v.id || v.custom_id,
            name: v.name,
            type: v.type,
            category: v.category,
            location: v.location,
            monthlyPrice: v.monthlyPrice,
            rating: v.rating,
            offer: v.offer,
            description: v.description,
            contact: v.contact,
            timings: v.timings,
            status: v.status,
          }))
        ),
        Cafe.insertMany(
          cafeData.map((c) => ({
            custom_id: c.id || c.custom_id,
            cafe_name: c.cafe_name || c.name,
            location: c.location,
            timings: c.timings,
            rating: c.rating,
            price_range: c.price_range,
            contact: c.contact,
            food_type: c.food_type,
          }))
        ),
        Laundry.insertMany(
          laundryData.map((l) => ({
            custom_id: l.id || l.custom_id,
            laundry_name: l.laundry_name || l.name,
            location: l.location,
            charges_per_kg: l.charges_per_kg,
            timings: l.timings,
            contact: l.contact,
            rating: l.rating,
          }))
        ),
        Hostel.insertMany(
          hostelData.map((h) => ({
            custom_id: h.id || h.custom_id,
            hostel_name: h.hostel_name || h.name,
            location: h.location,
            charges: h.charges,
            charge_unit: h.charge_unit,
            gender: h.gender,
            contact: h.contact,
            rating: h.rating,
          }))
        ),
        Housekeeping.insertMany(
          housekeepingData.map((hk) => ({
            custom_id: hk.id || hk.custom_id,
            staff_name: hk.staff_name || hk.name,
            contact: hk.contact,
            charges_per_hour: hk.charges_per_hour,
            working_hours: hk.working_hours,
            working_days: hk.working_days,
            rating: hk.rating,
          }))
        ),
        Roommate.insertMany(roommateData),
      ]);

    return NextResponse.json({
      status: "SUCCESS",
      message: "Database seeded successfully!",
      inserted: {
        mess: messes.length,
        vendors: vendorDocs.length,
        cafes: cafes.length,
        laundry: laundries.length,
        hostels: hostels.length,
        housekeeping: housekeepingDocs.length,
        roommates: roommates.length,
      },
    });
  } catch (err) {
    console.error("Seeding error:", err);
    return NextResponse.json(
      {
        status: "FAILED",
        errorName: err.name,
        errorMessage: err.message,
      },
      { status: 500 }
    );
  }
}