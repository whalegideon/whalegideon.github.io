import React, { useRef } from 'react'
import { useScrollEffect } from '../../hooks/useScrollEffect';

const ResponsiveImage = ({src, srcTablet, alt}) => {
  if (!src) return null;

  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={srcTablet} />
      <img src={src} loading="eager" fetchPriority="high" alt={alt}/>
    </picture>
  )
}

export default function ImageBanner({logoPNG, logoPNGTablet, avatar, avatarTablet, heading, subheading, description}) {
  const blockRef = useRef(null);
  const bannerSubRef = useRef(null);
  const bannerHeadingRef = useRef(null);
  const bannerSub = useRef(null);
  const bannerDescRef = useRef(null);

  useScrollEffect({
    blockRef,
    bannerSubRef,
    bannerHeadingRef,
    bannerSub,
    bannerDescRef
  });

  return (
    <section ref={blockRef} className="image-banner relative overflow-hidden">
      {logoPNG && (
        <div ref={bannerSubRef} className="logo-text">
          <ResponsiveImage src={logoPNG} srcTablet={logoPNGTablet} alt="Logo" />
        </div>
      )}

      {avatar && (
        <div className="avatar">
          <ResponsiveImage src={avatar} srcTablet={avatarTablet} alt="Avatar" />
        </div>
      )}

      <div className="content-wrapper container-custom">
        <div ref={bannerHeadingRef} className="name flex flex-col justify-end">
          {heading && (
            <h1 className="heading uppercase text-4xl lg:text-7xl xl:text-9xl">{heading}</h1>
          )}
          {subheading && (
            <p className="subheading uppercase text-lg lg:text-2xl xl:text-3xl">{subheading}</p>
          )}
        </div>
        {description && (
          <p ref={bannerDescRef} className="description text-xl lg:text-2xl xl:text-3xl lg:leading-3xl">{description}</p>
        )}
      </div>
    </section>
  )
}
