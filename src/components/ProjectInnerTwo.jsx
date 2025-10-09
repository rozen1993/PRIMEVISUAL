import Link from "next/link";
import ImageView from "@components/ImageView";
import VideoModal from "@components/video-modal/VideoModal";

const ProjectInner2 = ({ postData, prev, next }) => {
    return (
    <>
    {/* project */}
    <section>
        <div className="container mil-p-120-120" id="project">
            <div className="row justify-content-between mil-mb-120">
                <div className="col-lg-4 order-2 order-md-0">

                    <div className="mil-p-0-120">
                        {typeof postData.details != "undefined" &&
                        <ul className="mil-service-list mil-dark mil-mb-60">
                            {postData.details.map((item, key) => (
                            <li className="mil-up" key={`project-details-item-${key}`}>{item.label} &nbsp;<span className="mil-dark">{item.value}</span></li>
                            ))}
                        </ul>
                        }

                        {typeof postData.description != "undefined" &&
                        <>
                            {postData.description.enabled == 1 &&
                            <>
                                <h5 className="mil-up mil-mb-30">{postData.description.title}</h5>
                                <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                            </>
                            }
                        </>
                        }

                        {typeof postData.demoLink != "undefined" &&
                        <a data-no-swup href={postData.demoLink} target="_blank" className="mil-link mil-dark mil-up mil-arrow-place">
                            <span>Visita la página web</span>
                        </a>
                        }
                    </div>

                </div>
                <div className="col-lg-7">
                    {/* VideoModal en lugar de galería */}
                    {postData.video && postData.video.url && (
                        <div className="mil-up">
                            <VideoModal
                                videoUrl={postData.video.url}
                                thumbnail={postData.video.thumbnail}
                                title={postData.title}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="mil-works-nav mil-up">
                <Link href={(prev.id != 0 && prev.id != undefined) ? `/projects/${prev.id}` : ""} className={(prev.id != 0 && prev.id != undefined) ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled"}>
                    <span>Anterior projecto</span>
                </Link>
                <Link href="/projects" className="mil-link mil-dark">
                    <span>Todos los projectos</span>
                </Link>
                <Link href={(next.id != 0 && next.id != undefined) ? `/projects/${next.id}` : ""} className={(next.id != 0 && next.id != undefined) ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled"}>
                    <span>Siguiente projecto</span>
                </Link>
            </div>
        </div>
        
        <ImageView />
    </section>
    {/* project end */}
    </>
    )
};
export default ProjectInner2;