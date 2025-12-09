import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE BOOKING
export async function POST(req: Request) {
  const body = await req.json();

  const booking = await prisma.booking.create({
    data: {
      customerName: body.name,
      customerPhone: body.phone,
      service: body.service,
      date: body.date,
    },
  });

  return NextResponse.json(booking);
}

// GET ALL BOOKINGS (for admin)
export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: { technician: true },
    orderBy: { date: "asc" },
  });

  return NextResponse.json(bookings);
}
