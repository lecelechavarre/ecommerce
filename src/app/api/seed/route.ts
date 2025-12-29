import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const sampleProducts = [
  {
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.8,
    reviews: 234,
    description: 'High-quality wireless headphones with noise cancellation',
    inStock: true
  },
  {
    name: 'Classic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    rating: 4.5,
    reviews: 189,
    description: 'Comfortable 100% cotton t-shirt',
    inStock: true
  },
  {
    name: 'Modern Desk Lamp',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 156,
    description: 'LED desk lamp with adjustable brightness',
    inStock: true
  },
  {
    name: 'Running Shoes',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    rating: 4.9,
    reviews: 312,
    description: 'Lightweight running shoes for maximum comfort',
    inStock: true
  },
  {
    name: 'Smart Watch Pro',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.6,
    reviews: 278,
    description: 'Advanced smartwatch with health tracking',
    inStock: true
  },
  {
    name: 'Leather Wallet',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.4,
    reviews: 145,
    description: 'Genuine leather wallet with multiple card slots',
    inStock: true
  },
  {
    name: 'Yoga Mat Premium',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
    category: 'Sports',
    rating: 4.8,
    reviews: 267,
    description: 'Non-slip yoga mat with extra cushioning',
    inStock: true
  },
  {
    name: 'Fiction Novel Collection',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    category: 'Books',
    rating: 4.7,
    reviews: 198,
    description: 'Best-selling fiction novels collection',
    inStock: true
  },
  {
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.5,
    reviews: 223,
    description: 'Waterproof bluetooth speaker with 12h battery',
    inStock: true
  },
  {
    name: 'Sunglasses UV Protection',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    reviews: 167,
    description: 'Stylish sunglasses with UV400 protection',
    inStock: true
  },
  {
    name: 'Denim Jacket',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop',
    category: 'Clothing',
    rating: 4.7,
    reviews: 134,
    description: 'Classic denim jacket with modern fit',
    inStock: true
  },
  {
    name: 'Indoor Plant Set',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    category: 'Home & Garden',
    rating: 4.3,
    reviews: 89,
    description: 'Set of 3 low-maintenance indoor plants',
    inStock: true
  }
]

export async function POST() {
  try {
    // Check if products already exist
    const existingProducts = await db.product.findMany()
    if (existingProducts.length > 0) {
      return NextResponse.json(
        { message: 'Products already seeded', count: existingProducts.length },
        { status: 200 }
      )
    }

    // Seed products
    const products = await db.product.createMany({
      data: sampleProducts
    })

    return NextResponse.json(
      { message: 'Products seeded successfully', count: products.count },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error seeding products:', error)
    return NextResponse.json(
      { error: 'Failed to seed products' },
      { status: 500 }
    )
  }
}
