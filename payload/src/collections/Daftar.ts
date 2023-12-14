import { CollectionConfig } from 'payload/types';

const Daftar: CollectionConfig = {
  slug: 'Daftar',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'nama',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'asalSekolah',
      label: 'Asal Sekolah',
      type: 'text',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'waiting' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Accepted', value: 'accepted'},
      ],
      defaultValue: 'waiting',
    },
    {
      name: 'tanggalPendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
    },
  ],
};

export default Daftar;
