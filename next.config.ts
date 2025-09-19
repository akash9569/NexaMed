import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images-eu.ssl-images-amazon.com', 'saih.in', 'www.medicalindiatourism.com', 'www.yashodahospitals.com', 'healthcheckup.kimshealthcare.com', 'hitechdiagnosticcentre.com', 'kdahweb-static.kokilabenhospital.com', 'wellmedbangkok.com', 'encrypted-tbn0.gstatic.com', 'www.eggoz.com', 'cdn.shopify.com', 'img.lb.wbmdstatic.com',"www.lalpathlabs.com", 'www.verywellhealth.com', '5.imimg.com', 'toyoos.com', 'i2.wp.com', 'assets.medpagetoday.net', 'jupiter.money', 'www.healthchek.in', 'plus.unsplash.com', 'w.ndtvimg.com', 'static.startuptalky.com', 'images.ctfassets.net', 'kefihealthcare.com', 'drive.google.com', 'img.freepik.com',"media.post.rvohealth.io", "deyga.in", "sa1s3optim.patientpop.com", "images.unsplash.com", "picsum.photos","lh6.googleusercontent.com","sunfox.in","www.moov.co.in","max-website20-images.s3.ap-south-1.amazonaws.com", "s16736.pcdn.co", "images.medicinenet.com", "buffalohealthyliving.com", "papayacare.com", "www.jacionline.org", "thekarostartup.com", "encrypted-tbn0.gstatic.com", "d35oenyzp35321.cloudfront.net", "globalwellnessinstitute.org", "premiercare4womenaz.com", "health.clevelandclinic.org","www.careformulationlabs.com", "zanducare.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.learnstockmarket.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-cdn.ubuy.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.glossy.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.economictimes.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'onemg.gumlet.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instagram.flko10-2.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.n2growth.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
