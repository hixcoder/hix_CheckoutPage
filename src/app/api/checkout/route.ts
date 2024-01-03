import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const {
      order: order,
      customer: customer,
      paymentMethod,
    } = await req.json();

    const myData: {
      order: Order;
      customer: Customer;
      paymentMethod: PaymentMethod;
    } = {
      order: order,
      customer: customer,
      paymentMethod: paymentMethod,
    };
    console.log(myData);

    const data = {
      status: "",
      data: myData,
    };

    if (myData.paymentMethod.cardNumber === "0000000000000000") {
      data.status = "Ok";
    } else if (myData.paymentMethod.cardNumber === "1111111111111111") {
      data.status = "Not enough";
    } else {
      data.status = "Card Not Valid";
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
