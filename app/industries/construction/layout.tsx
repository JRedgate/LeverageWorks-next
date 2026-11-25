import { industryMetadata } from '@/components/IndustryPage';

export const metadata = industryMetadata('construction');

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
