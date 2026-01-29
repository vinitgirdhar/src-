import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import prachiRautImg from '@/assets/prachiraut.png';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const InformationTechnology = () => {
    return (
        <div className="min-h-screen bg-background">
            <UtilityBar />
            <MainHeader />
            <Navigation />
            
            <main className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                        Department of Information Technology
                    </h1>
                    
                    <div className="flex flex-col lg:flex-row gap-10 mb-12">
                        {/* HOD Profile Section */}
                        <div className="lg:w-1/3 flex-shrink-0">
                            <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                                <div className="aspect-[3/4] overflow-hidden">
                                     <img 
                                        src={prachiRautImg} 
                                        alt="Dr. Prachi Raut" 
                                        className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-500 hover:scale-110 hover:grayscale-0"
                                    />
                                </div>
                                <div className="bg-[#2c2c2c] p-6 text-white border-t-4 border-amber">
                                    <h3 className="text-xl font-bold uppercase tracking-wide mb-1">Dr. Prachi Raut</h3>
                                    <p className="text-amber font-bold text-sm mb-4">Head of Department</p>
                                    <div className="h-px bg-white/10 w-full mb-4" />
                                    <p className="text-[11px] text-gray-300 leading-relaxed font-medium uppercase tracking-tighter">
                                        PhD (Technology), M.E. (Electronics), B.E. (Electronics)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="lg:w-2/3 prose prose-lg max-w-none text-gray-700">
                            <p className="mb-4">
                                The department of Information Technology at the St. Francis Institute of
                                Technology (SFIT) is a perfect blend of experienced faculty and
                                up-to-date infrastructure which creates a conducive learning environment
                                for new generation students. The department offers a bachelor’s degree
                                (B.E.) in Information Technology. The intake of the department at its
                                inception in 1999 was 60. At present, we have an intake of 120. The
                                department has been accredited by the NBA four times till now. Current
                                accreditation is valid till June 2025.
                            </p>
                            <p className="mb-4">
                                With the power of academic autonomy, the department has introduced the
                                latest technology courses on Web and Mobile Development, Software
                                Engineering, DevOps, Artificial Intelligence, Machine Learning, Data
                                Analytics etc. Inline with the institute’s vision of creating
                                entrepreneurs and technological leaders, the department’s syllabus
                                includes courses on Entrepreneurship, Digital Business Management,
                                Management Information Systems etc.
                            </p>
                            <p className="mb-4">
                                The department’s faculty profile boasts of PhD/PG degrees from premier
                                institutes, decades of teaching experience, demonstrated research and
                                mentoring skills. ICT enabled classrooms, tutorial rooms and state of
                                the art laboratories support the teaching-learning process.
                            </p>
                            <p>
                                Apart from the regular courses, we encourage our students to participate
                                in competitions, hackathons, internships and volunteering activities. The
                                students are also guided in higher studies, placements and start-ups
                                through mentoring programs. We are proud of our alumni who are
                                contributing in the field of technology in the organizations world-over.
                                The Information Technology Student’s Association (ITSA) is a vibrant
                                body which arranges various technical and non-technical activities
                                throughout the year supporting the department in achieving its vision.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 mb-16">
                         <Card className="border-l-4 border-l-amber shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-navy-800 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                    </span>
                                    Our Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed italic text-lg border-l-2 border-gray-100 pl-4 py-2">
                                    "To create a conducive instrument for transforming the enrolled
                                    potential fresher into competent Information Technology professional or
                                    entrepreneur with integrity and ethical value."
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-amber shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-navy-800 flex items-center gap-2">
                                     <span className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber"><path d="M12 13V2l8 4-8 4Z"/><path d="M20.5 10.3a9 9 0 1 1-12.4 10.3"/><path d="m15.5 15.5 4.5 4.5"/></svg>
                                    </span>
                                    Our Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "To become unit of excellence in teaching, training, research, innovative application and extension work in IT in co-operation with various other departments.",
                                        "To make knowledge and expertise accessible with various dissemination strategies, including networking with research unit, colleges, government and industry along with the motivation for self-learning.",
                                        "To integrate teaching, research and practice along with higher education for generation and application of knowledge in line with emerging needs of industry, technical quality with market driven professional pursuits, programs, courses, collaboration.",
                                        "To develop entrepreneur skills along with ethical and professional values among the students."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                                            <span className="text-amber font-bold flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4 mb-16">
                        <AccordionItem value="peos" className="border rounded-xl px-4 bg-white shadow-sm overflow-hidden">
                            <AccordionTrigger className="text-lg font-semibold text-navy-800 hover:no-underline">
                                Program Educational Objectives (PEOs)
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 space-y-4 pt-2">
                                <p>To provide students with a sound foundation in mathematical,
                                scientific and engineering fundamentals to design, analyse and solve
                                complex engineering problems, to develop quest for higher studies
                                and to inspire them to foster innovative research.</p>
                                <p>To provide an environment and to make knowledge & expertise
                                accessible for students to work in multi-disciplinary projects, to
                                solve the real life problems with the help of modern tools and
                                techniques and to lead towards a successful professional career.</p>
                            </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="psos" className="border rounded-xl px-4 bg-white shadow-sm overflow-hidden">
                            <AccordionTrigger className="text-lg font-semibold text-navy-800 hover:no-underline">
                                Program Specific Outcomes (PSOs)
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pt-2">
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-amber/10 text-amber flex items-center justify-center rounded-full text-xs font-bold">1</span>
                                        <p>Students will be able to acquire the basic knowledge of analysis
                                        and design, based on the comprehensive principles of Software
                                        Engineering, Project Management, Software Testing and Quality
                                        Assurance.</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-amber/10 text-amber flex items-center justify-center rounded-full text-xs font-bold">2</span>
                                        <p>Students will be able to apply research based approach using
                                        innovative tools and techniques in the field of Communication &
                                        Networks, Computer graphics & Image Processing and Information
                                        Security & Data Management.</p>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-display font-bold text-navy-900">Latest News & Events</h2>
                            <div className="h-1 flex-1 bg-gray-100 ml-6 rounded-full hidden sm:block" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Colloquium 25 - IT for Good Governance", date: "Apr 25", loc: "SFIT, Borivali" },
                                { title: "Becoming IOE Ready", date: "Jun 24-29, 24", loc: "SFIT, Borivali" },
                                { title: "Colloquium 24 - IT for Smart College Campus", date: "Mar 22-23, 24", loc: "SFIT, Borivali" },
                                { title: "Colloquium 2023 - IT in Wellness-Tech", date: "Apr 12-13, 23", loc: "SFIT, Borivali" },
                            ].map((event, i) => (
                                <Card
                                    key={i}
                                    className="group border-none bg-gray-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:bg-white"
                                >
                                    <CardHeader className="pb-2 transition-colors duration-300">
                                        <div className="text-xs font-bold text-amber mb-2 uppercase tracking-wider">{event.date}</div>
                                        <CardTitle className="text-lg leading-tight transition-colors duration-300 group-hover:text-navy">
                                            {event.title}
                                        </CardTitle>
                                        <CardDescription className="transition-colors duration-300 group-hover:text-gray-700">
                                            {event.loc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-amber/5 via-white to-amber/5 border-2 border-amber/20 p-8 md:p-12 rounded-3xl shadow-lg">
                        <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-navy">
                            <span className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                            </span>
                            Departmental Achievements
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 p-5 rounded-xl bg-white border border-amber/20 hover:border-amber/40 hover:shadow-md transition-all group">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-amber flex-shrink-0 group-hover:scale-125 transition-transform" />
                                <p className="text-base text-gray-800 leading-relaxed">Congratulations to students for special achievements in national and international competitions.</p>
                            </li>
                            <li className="flex items-start gap-4 p-5 rounded-xl bg-white border border-amber/20 hover:border-amber/40 hover:shadow-md transition-all group">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-amber flex-shrink-0 group-hover:scale-125 transition-transform" />
                                <p className="text-base text-gray-800 leading-relaxed">Congratulations to all faculties and students for successful completion of NPTEL, IIT certified online courses.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
        </div>
    );
};

export default InformationTechnology;