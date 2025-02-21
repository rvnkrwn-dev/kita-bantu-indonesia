import DrowpDownCheckList from './DrowpDownCheckList';

const tanggalPostingCategories = [
  '24 jam terakhir',
  'Minggu lalu',
  'Bulan lalu',
  'Kapan pun',
];
const TingkatPendidikanCategories = [
  'SD',
  'SMP',
  'SMA/SMK',
  'Diploma (D1 - D4)',
  'Sarjana (S1)',
  'Magister (S2)',
  'Doktor (S3)',
];
const tingkatPengalamanCategories = [
  'Tidak Berpengalaman',
  'Fresh Graduate',
  '1 - 3 tahun',
  '3 - 5 tahun',
  '5 - 10 tahun',
  'Lebih dari 10 tahun',
];
const tipePekerjaanCategories = [
  'Harian',
  'Kontrak',
  'Magang',
  'Freelance',
  'Paruh Waktu',
  'Penuh Waktu',
];

const Filter = ({ filter, setFilter }: { filter: any; setFilter: any }) => {
  return (
    <div className="w-full mt-5 flex flex-wrap justify-center items-center gap-2 z-0">
      <DrowpDownCheckList
        key="Tanggal Posting"
        dropDownName="Tanggal Posting"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tanggalPostingCategories}
        category="posted_at"
        filter={filter}
        setFilter={setFilter}
      />
      <DrowpDownCheckList
        key="Tingkat Pendidikan"
        dropDownName="Tingkat Pendidikan"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={TingkatPendidikanCategories}
        category="education_level"
        filter={filter}
        setFilter={setFilter}
      />
      <DrowpDownCheckList
        key="Tingkat Pengalaman"
        dropDownName="Tingkat Pengalaman"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tingkatPengalamanCategories}
        category="experience"
        filter={filter}
        setFilter={setFilter}
      />
      <DrowpDownCheckList
        key="Tipe Pekerjaan"
        dropDownName="Tipe Pekerjaan"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tipePekerjaanCategories}
        category="employment_type"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default Filter;
