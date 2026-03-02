'use client'

import * as React from 'react'
import { useState } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import { Skeleton } from './skeleton'

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  const [loaded, setLoaded] = useState(false)

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true)
    if (props.onLoad) props.onLoad(e)
  }

  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <AvatarPrimitive.Image
        data-slot="avatar-image"
        className={cn(
          'aspect-square size-full transition-opacity duration-300',
          className,
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={handleLoad}
        {...props}
      />
    </>
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
