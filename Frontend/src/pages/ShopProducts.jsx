import { useState } from "react";

import Breadcrumb from "../components/ShopPage/Breadcrumb";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import PageHeader from "../components/ShopPage/PageHeader";
import HeroBanner from "../components/ShopPage/HeroBanner";
import SidebarFilters from "../components/ShopPage/SidebarFilters";
import ProductGrid from "../components/ShopPage/ProductGrid";

export default function ShopProducts() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Breadcrumb />
        <PageHeader />
        <HeroBanner />
        {/* Collection Grid Layout */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Left Side Filter Panels */}
          <aside className="w-full lg:w-64 shrink-0">
            <SidebarFilters
              search={search}
              setSearch={setSearch}
              setFilter={setFilter}
            />
          </aside>

          {/* Right Side Results Grid */}
          <section className="flex-1">
            <ProductGrid search={search} filter={filter} />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
