import React from 'react';

const Card = (props) => {
    const { name, image, published_in, features, id } = props.data;

    return (
        <>
            <div className="card bg-base-100 shadow-2xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Cards" className="rounded-xl w-full h-60" />
                </figure>
                <div className="card-body px-5 pt-5">
                    <h2 className="text-xl font-semibold">Features</h2>
                    {features ? features.map((feature, index) => <p key={index}>{index + 1}. {feature}</p>) : "Not Found"}
                    <hr className='border border-gray-300 my-4' />
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span>{published_in}</span>
                        </div>
                        <label onClick={() => props.setUniqueId(id)} htmlFor="card-details-modal" className='bg-red-200 p-4 rounded-full cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-error">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;