'use client';
import { useEffect, useState } from 'react';
import JobList from '../_components/JobList';
import Filter from '../_components/Filter';
import SearchButtonFilter from '../_components/SearchButtonFilter';
import Pagination from './Pagination';

type Job = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  education_level: string;
  jasa: string;
  posted_at: { displayTime: string; filterTime: string };
  salary_range: string;
  company_logo: string;
  status: string;
  experience: string[];
};
const itemsPerPage = 20;
const Jobs = ({ Jobsdata }: { Jobsdata: Job[] }) => {
  const [data, setData] = useState<Job[]>(Jobsdata);
  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState({
    jasa: [],
    location: [],
    posted_at: [],
    education_level: [],
    experience: [],
    employment_type: [],
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Ambil data yang sesuai dengan halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const dataBySearch = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(data.length > 3 ? dataBySearch : Jobsdata);
  }, [search]);

  useEffect(() => {
    let filteredData = Jobsdata;

    async function fetchLocations() {
      if (filters.location.length === 0) return;

      const queryString = filters.location
        .map((prov) => `provinces=${prov}`)
        .join('&');

      try {
        const res = await fetch(
          `http://localhost:3000/api/locations?${queryString}`
        );
        const dataLocation = await res.json();

        const filterLocation = filteredData.filter((job: any) => {
          const locationWords = job.location
            .split(',')[0]
            .toLowerCase()
            .split(' ');

          return dataLocation.some((s: any) => {
            const sLower = s.toLowerCase();
            return locationWords.some((word: any) => sLower.includes(word));
          });
        });

        filteredData = filterLocation;
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }

    async function applyFilters() {
      await fetchLocations();

      if (filters.jasa.length > 0) {
        filteredData = filteredData.filter((job: any) =>
          job.jasa.includes(filters.jasa)
        );
      }
      if (filters.posted_at.length > 0) {
        filteredData = filteredData.filter((job: any) =>
          filters.posted_at.some((item: any) =>
            item.includes(job.posted_at.filterTime)
          )
        );
      }
      if (filters.employment_type.length > 0) {
        filteredData = filteredData.filter((job: any) =>
          job.employment_type.includes(filters.employment_type)
        );
      }
      if (filters.experience.length > 0) {
        filteredData = filteredData.filter((job: any) =>
          job.experience.includes(filters.experience)
        );
      }
      if (filters.education_level.length > 0) {
        filteredData = filteredData.filter((job) =>
          filters.education_level.some(
            (item: any) =>
              item.toLowerCase() === job.education_level.toLowerCase()
          )
        );
      }

      setData(filteredData);
    }

    applyFilters();
  }, [filters, Jobsdata]);

  return (
    <div className="px-10 py-12 min-h-dvh">
      <SearchButtonFilter
        filter={filters}
        setFilter={setFilters}
        setSearch={setSearch}
      />
      <Filter filter={filters} setFilter={setFilters} />
      {currentItems.length > 0 ? (
        <JobList jobs={currentItems} />
      ) : (
        <p className="text-center pt-12 font-semibold">
          Pekerjaan Tidak Di Temukan
        </p>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Jobs;
