import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNicheBySlug, allNiches } from '@/data/niches';
import NicheHero from '@/components/niche/NicheHero';
import NicheDemoVideo from '@/components/niche/NicheDemoVideo';
import PainPoints from '@/components/niche/PainPoints';
import SolutionWorkflow from '@/components/niche/SolutionWorkflow';
import Deliverables from '@/components/niche/Deliverables';
import BeforeAfter from '@/components/niche/BeforeAfter';
import NicheSocialProof from '@/components/niche/NicheSocialProof';
import NichePricing from '@/components/niche/NichePricing';
import FAQ from '@/components/niche/FAQ';
import FinalCTA from '@/components/niche/FinalCTA';

export async function generateStaticParams() {
  return allNiches.map((niche) => ({ niche: niche.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { niche: string };
}): Promise<Metadata> {
  const data = getNicheBySlug(params.niche);
  if (!data) return { title: '404 | ECOLAB' };
  return {
    title: `${data.name} AI Automation | ECOLAB`,
    description: data.subheadline,
    openGraph: {
      title: `${data.name} AI Automation | ECOLAB`,
      description: data.subheadline,
      url: `http://localhost:3000/solutions/${data.slug}`,
      siteName: 'ECOLAB',
    },
  };
}

export default function NichePage({ params }: { params: { niche: string } }) {
  const data = getNicheBySlug(params.niche);

  if (!data) {
    notFound();
  }

  return (
    <>
      <NicheHero data={data} />
      <NicheDemoVideo data={data} />
      <PainPoints data={data} />
      <SolutionWorkflow data={data} />
      <Deliverables data={data} />
      <BeforeAfter data={data} />
      <NicheSocialProof data={data} />
      <NichePricing data={data} />
      <FAQ data={data} />
      <FinalCTA data={data} />
    </>
  );
}
