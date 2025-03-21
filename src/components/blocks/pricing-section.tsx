'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  title: string;
  details: string[];
}

interface PricingCardProps {
  title: string;
  price: string;
  color: 'gold' | 'blue' | 'orange';
  features: PricingFeature[];
}

export default function PricingCard({ title, price, color, features }: PricingCardProps) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const colorClasses = {
    gold: 'from-amber-400 to-amber-600',
    blue: 'from-blue-400 to-blue-600',
    orange: 'from-orange-400 to-orange-600',
  };

  const borderClasses = {
    gold: 'border-amber-200',
    blue: 'border-blue-200',
    orange: 'border-orange-200',
  };

  return (
    <div className="relative will-change-transform">
      <div className={cn(
        'absolute inset-0 rounded-[2rem] bg-gradient-to-r opacity-20 transition-opacity duration-300',
        colorClasses[color],
        'group-hover:opacity-30'
      )} 
      style={{ 
        transform: 'translateZ(0)',
        willChange: 'opacity'
      }}
      />
      
      <div className={cn(
        'relative bg-white rounded-[2rem] border-2 overflow-hidden',
        borderClasses[color],
        'hover:shadow-lg transition-shadow duration-300'
      )}>
        <div className={cn(
          'p-8 bg-gradient-to-r text-white',
          colorClasses[color]
        )}>
          <h3 className="text-4xl font-bold text-center mb-3">{title}</h3>
          <p className="text-2xl text-center font-medium opacity-90">{price}</p>
        </div>
        
        <div className="divide-y divide-gray-100">
          {features.map((feature) => (
            <div key={feature.title} className="relative">
              <button
                onClick={() => setExpandedFeature(expandedFeature === feature.title ? null : feature.title)}
                className={cn(
                  'w-full px-6 py-5 text-left flex items-center justify-between',
                  'hover:bg-gray-50 transition-colors duration-200',
                  expandedFeature === feature.title && 'bg-gray-50'
                )}
              >
                <span className="text-gray-800 font-medium">{feature.title}</span>
                <Plus
                  className={cn(
                    'h-5 w-5 text-gray-400 transition-transform duration-200',
                    expandedFeature === feature.title && 'rotate-45'
                  )}
                />
              </button>
              
              {expandedFeature === feature.title && (
                <div className="px-6 pb-5 text-sm text-gray-600 bg-gray-50">
                  <ul className="space-y-3">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}