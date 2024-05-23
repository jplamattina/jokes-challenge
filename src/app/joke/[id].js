'use client'
import React from 'react'

import { useRouter } from 'next/router';

export default function JokePage() {
  const router = useRouter();
  const { id } = router.query;
    console.log('id', id)
  return (
    <div>
      <h1>Joke</h1>
      <p>ID: {id}</p>
    </div>
  );
}