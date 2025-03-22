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
    gold: 'text-amber-600 border-amber-200',
    blue: 'text-blue-600 border-blue-200',
    orange: 'text-orange-600 border-orange-200',
  };

  const bgColorClasses = {
    gold: 'bg-amber-50',
    blue: 'bg-blue-50',
    orange: 'bg-orange-50',
  };

  return (
    <div className="relative transform transition-transform duration-300 hover:-translate-y-1">
      <div className={cn(
        'bg-white rounded-2xl border-2 overflow-hidden',
        colorClasses[color],
        'shadow-sm hover:shadow-xl transition-shadow duration-300'
      )}>
        <div className={cn(
          'px-8 pt-8 pb-6',
          bgColorClasses[color]
        )}>
          <h3 className={cn(
            'text-3xl font-bold text-center mb-2',
            colorClasses[color]
          )}>{title}</h3>
          <p className="text-xl text-center font-medium text-gray-600">{price}</p>
        </div>
        
        <div className="divide-y divide-gray-100">
          {features.map((feature) => (
            <div key={feature.title} className="relative">
              <button
                onClick={() => setExpandedFeature(expandedFeature === feature.title ? null : feature.title)}
                className={cn(
                  'w-full px-6 py-4 text-left flex items-center justify-between',
                  'hover:bg-gray-50 transition-colors duration-200',
                  expandedFeature === feature.title && 'bg-gray-50'
                )}
              >
                <span className="text-gray-700 font-medium text-sm">{feature.title}</span>
                <Plus
                  className={cn(
                    'h-4 w-4 text-gray-400 transition-transform duration-200',
                    expandedFeature === feature.title && 'rotate-45'
                  )}
                />
              </button>
              
              {expandedFeature === feature.title && (
                <div className="px-6 py-3 text-sm bg-gray-50">
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className={cn(
                          'mr-3 h-1 w-1 rounded-full',
                          colorClasses[color]
                        )} />
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