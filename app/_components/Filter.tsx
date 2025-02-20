import DrowpDownCheckList from './DrowpDownCheckList';

type Props = {};

const tanggalPostingCategories = [
  '24 jam terakhir',
  'Minggu lalu',
  'Bulan lalu',
  'Kapan pun',
];
const TingkatPendidikanCategories = [
  'SD',
  'SMP',
  'SMA/SMK/MA',
  'Diploma (D1 - D2)',
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

const Filter = (props: Props) => {
  return (
    <div className="w-full mt-5 flex flex-wrap justify-center items-center gap-2 z-0">
      <DrowpDownCheckList
        key="Tanggal Posting"
        dropDownName="Tanggal Posting"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tanggalPostingCategories}
      />
      <DrowpDownCheckList
        key="Tingkat Pendidikan"
        dropDownName="Tingkat Pendidikan"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={TingkatPendidikanCategories}
      />
      <DrowpDownCheckList
        key="Tingkat Pengalaman"
        dropDownName="Tingkat Pengalaman"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tingkatPengalamanCategories}
      />
      <DrowpDownCheckList
        key="Tipe Pekerjaan"
        dropDownName="Tipe Pekerjaan"
        shadow="shadow-sm rounded-lg border border-slate-200"
        dropDownList={tipePekerjaanCategories}
      />
    </div>
  );
};

export default Filter;
