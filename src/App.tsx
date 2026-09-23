/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { CarCategories } from './components/CarCategories';
import { VehicleBrowser } from './components/VehicleBrowser';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyCallBar } from './components/StickyCallBar';

export default function App() {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryKey: string) => {
    setSelectedCategoryFilter(categoryKey);
    scrollToSection('cars');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#17202A]">
      {/* Sticky Header Navigation */}
      <Header onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreCars={() => scrollToSection('cars')} />

        {/* Quick Information & Trust Bar */}
        <QuickInfoBar />

        {/* Vehicle Categories Grid */}
        <CarCategories onSelectCategory={handleCategorySelect} />

        {/* Featured Vehicles & Filter Interface */}
        <VehicleBrowser
          selectedCategoryFilter={selectedCategoryFilter}
          onClearCategoryFilter={() => setSelectedCategoryFilter(null)}
          onNavigateToLocation={() => scrollToSection('location')}
        />

        {/* About New Lahore Motors */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Light Professional Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating & Fixed Bottom Call CTAs */}
      <StickyCallBar />
    </div>
  );
}
