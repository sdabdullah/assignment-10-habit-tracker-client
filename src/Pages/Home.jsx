import React from 'react';
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <section className="relative overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    className="h-[600px]"
                >
                    <SwiperSlide>
                        <div className="relative h-full bg-gradient-to-r from-violet-600 to-indigo-600">
                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="https://images.unsplash.com/photo-1606663485553-432d79af0620" />

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Build{' '}
                                        <span className="text-yellow-300">
                                            <Typewriter
                                                words={['Better Habits', 'Stronger Streaks', 'Your Future']}
                                                loop={0}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Transform your life one habit at a time with our powerful tracking system
                                    </p>
                                    <Link to="/register">
                                        <button className="bg-white text-violet-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Start Your Journey
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full  bg-gradient-to-r from-indigo-600 to-blue-600">
                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="https://images.unsplash.com/photo-1594911531568-b3d4e7ec7a87" />

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Track Your Progress
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Visualize your streaks and celebrate every milestone
                                    </p>
                                    <Link to="/browse-habits">
                                        <button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Explore Habits
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full bg-gradient-to-r from-blue-600 to-cyan-600">
                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="https://images.unsplash.com/photo-1636961758654-01550d9ef9a1" />

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Join Our Community
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Share habits and inspire others on their journey
                                    </p>
                                    <Link to="/register">
                                        <button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Get Started Free
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Home;