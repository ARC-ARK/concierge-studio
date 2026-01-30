import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Simulation of backend processing
  console.log("----- NEW LEAD RECEIVED -----");
  console.log(body);
  console.log("-----------------------------");

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json({ success: true, message: "Lead captured" });
}
