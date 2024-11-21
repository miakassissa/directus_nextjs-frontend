import { NextRequest, NextResponse } from 'next/server';
import Cors from 'cors';

// Configure CORS
const cors = Cors({
  origin: 'http://localhost:3000', // Replace with your Next.js app URL.
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
  allowedHeaders: '*',
  credentials: true,
});

// Helper to run middleware asynchronously
function runMiddleware(req: NextRequest, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, {
      end: resolve,
      statusCode: 200,
    } as any, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Middleware function
export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api')) {
    await runMiddleware(req, cors);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'], // Apply middleware to all API routes
};
