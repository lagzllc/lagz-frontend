import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();

  const booking = await prisma.booking.create({
    data: {
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      service: data.service,
      date: data.date,
    },
  });

  return NextResponse.json(booking);
}
