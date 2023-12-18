

// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

// const animatedComponents = makeAnimated();




  const AddArticle  = () => {



    return (
        <div>

            <form>
                <h1 className=" text-5xl text-center font-bold shadow-lg mt-3 p-3" > Add Article </h1>
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text"> Title</span>
                    </label>
                    <input type="text"
                        placeholder="Title "

                        required
                        className="input input-bordered w-full" />

                </div>

                <div className=" flex items-center gap-2" >
                    {/* publisher */}

                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text"> Publisher </span>
                        </label>
                        <input type="text"
                            placeholder="Publisher"

                            required
                            className="input input-bordered w-full" />

                    </div>


                    {/* ,tags*/}

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tags</span>
                        </label>
                        <input type="text"
                            placeholder="Tags"

                            required
                            className="input input-bordered w-full" />
                        
{/* 
                        <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    /> */}


                    </div>

                </div>
                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Article Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-28" placeholder="Recipe Details"></textarea>
                </div>

                <div className=" mt-4 mb-3" >
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>


                <button className=" btn btn-outline w-full" >
                    Add Article
                </button>
            </form>


        </div>
    );
};

export default AddArticle;