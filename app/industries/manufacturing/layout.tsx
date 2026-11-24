import { industryMetadata } from '@/components/IndustryPage';

export const metadata = industryMetadata('manufacturing');

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
