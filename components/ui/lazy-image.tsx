import { useState, useEffect } from "react"
import { cn } from '@/lib/utils'
import { Skeleton } from './skeleton'
import Image from 'next/image'

interface LazyImageProps {
  /**
   * Additional classes to apply to the outer wrapper (the sizing container).
   */
  wrapperClassName?: string
  /**
   * Classes that should be applied directly to the <img> element.
   */
  imgClassName?: string
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  decoding?: 'async' | 'auto' | 'sync'
  onLoad?: () => void
}

export function LazyImage({
  wrapperClassName,
  imgClassName,
  src,
  alt,
  loading = 'lazy',
  priority = false,
  fill = true,
  width,
  height,
  decoding,
  onLoad,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(false)

  // Show skeleton only after 300ms of loading - avoids flashing for cached images
  useEffect(() => {
    if (loaded) {
      setShowSkeleton(false)
      return
    }

    const timer = setTimeout(() => {
      setShowSkeleton(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [loaded])

  const handleLoad = () => {
    setLoaded(true)
    if (onLoad) {
      onLoad()
    }
  }

  return (
    <div className={cn('relative', wrapperClassName)}>
      {showSkeleton && <Skeleton className="absolute inset-0 w-full h-full" />}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        loading={loading}
        priority={priority}
        decoding={decoding}
        onLoad={handleLoad}
        className={cn(
          'w-full h-full transition-opacity duration-300 object-cover',
          imgClassName,
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </div>
  )
}
