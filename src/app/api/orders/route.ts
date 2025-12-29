import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface OrderItemData {
  productId: string
  quantity: number
  price: number
}

interface OrderData {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  shippingMethod: string
  shippingCost: number
  tax: number
  total: number
  orderItems: OrderItemData[]
}

export async function POST(request: NextRequest) {
  try {
    const data: OrderData = await request.json()

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`

    // Create order with items in a transaction
    const order = await db.order.create({
      data: {
        orderNumber,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
        phone: data.phone,
        shippingMethod: data.shippingMethod,
        shippingCost: data.shippingCost,
        tax: data.tax,
        total: data.total,
        status: 'pending',
        orderItems: {
          create: data.orderItems.map((item: OrderItemData) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}
