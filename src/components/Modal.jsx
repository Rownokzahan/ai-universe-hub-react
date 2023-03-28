import React, { useEffect, useState } from 'react';

const Modal = (props) => {
    const [modalInfo, setModalInfo] = useState({});
    const { description, image_link, input_output_examples, pricing, features, integrations, accuracy } = modalInfo;

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${props.id}`);
            const data = await res.json();
            setModalInfo(data.data);
        }
        loadData();
    }, [props.id]);

    return (
        <>
            <input type="checkbox" id="card-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative bg-white">
                    <label htmlFor="card-details-modal" className="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4" >
                        <div className='bg-red-100 rounded-lg border border-error p-4'>
                            <div>
                                <h3 className='text-2xl font-semibold'>{description ? description : "Not Found"}</h3>
                                <div className="flex flex-col md:flex-row justify-between gap-4 text-center py-10">
                                    <p className="rounded-md bg-white font-semibold text-green-600 p-5">
                                        {pricing ? pricing[0].price + " " + pricing[0].plan : 'Free of Cost/Basic'}
                                    </p>
                                    <p className="rounded-md bg-white font-semibold text-orange-600 p-5">
                                        {pricing ? pricing[1].price + " " + pricing[1].plan : 'Free Of Cost/Pro'}

                                    </p>
                                    <p className="rounded-md bg-white font-semibold text-red-600 p-5">
                                        {pricing ? pricing[2].price + " " + pricing[2].plan : 'Free of Cost /Enterprise'}
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
                                    <div>
                                        <h3 className='text-xl font-semibold'>Features</h3>
                                        <ul className='list-inside list-disc'>
                                            {features ? Object.values(features).map((feature, index) => <li key={index}>{feature.feature_name}</li>) : "No data Found"}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold'>Integrations</h3>
                                        <ul className='list-inside list-disc'>
                                            {integrations ? integrations.map((integration, index) => <li key={index}>{integration}</li>) : "No data Found"}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-lg p-4 border border-secondary text-center relative'>
                            <img src={image_link ? image_link[0] : "Not Found"} className='w-full rounded-lg h-52' alt="" />
                            <h3 className='text-xl font-semibold my-2'>
                                {input_output_examples ? input_output_examples[0].input : 'Can you give any example?'}
                            </h3>
                            <p className='text-gray-400'>
                                {input_output_examples ? input_output_examples[0].output : "No! Not Yet! Take a break!!!"}
                            </p>

                            {accuracy?.score ? <button className='badge badge-error p-3 absolute top-2 right-2'>{accuracy.score * 100}% accuracy</button> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;