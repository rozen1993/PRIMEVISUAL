// En tu ProjectInner3.jsx - importación actualizada
import Link from "next/link";
import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageView from "@components/ImageView";
import VideoModal from "@components/video-modal/VideoModal"; // ← Ruta actualizada

const ProjectInner3 = ({ postData, prev, next }) => {
  return (
    <>
      <section id="project">
        <div
          style={{
            maxWidth: "1140px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5rem",
          }}
        >
          <VideoModal
            videoUrl={postData.video.url}
            thumbnail={postData.video.thumbnail}
            title={postData.title}
          />
        </div>
        <div className="container mil-p-120-120">
         {/*  {postData.video && postData.video.url && (
            <div className="mil-up mil-mt-120">
              <VideoModal
                videoUrl={postData.video.url}
                thumbnail={postData.video.thumbnail}
                title={postData.title}
              />
            </div>
          )} */}

          {/* ✅ VIDEO MODAL - Con la nueva ruta */}

          {/* El resto de tu código permanece igual */}
          {typeof postData.details != "undefined" && (
            <div className="mil-info mil-up">
              {postData.details.map((item, key) => (
                <div style={{textAlign:"left"}} key={`project-details-item-${key}`}>
                  {item.label} &nbsp;
                  <span className="mil-dark">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          <div className="row justify-content-between mil-p-120-90">
            <div className="col-lg-5">
              <h3 className="mil-up mil-mb-60">{postData.description.title}</h3>
            </div>
            <div className="col-lg-6">
              <div
                className="mil-text mil-up"
                dangerouslySetInnerHTML={{
                  __html: postData.description.content,
                }}
              />
            </div>
          </div>
          <div className="mil-works-nav mil-up">
            <Link
              href={
                prev.id != 0 && prev.id != undefined
                  ? `/projects/${prev.id}`
                  : ""
              }
              className={
                prev.id != 0 && prev.id != undefined
                  ? "mil-link mil-dark mil-arrow-place mil-icon-left"
                  : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled"
              }
            >
              <span>Anterior proyecto</span>
            </Link>
            <Link href="/projects" className="mil-link mil-dark">
              <span>Todos los proyectos</span>
            </Link>
            <Link
              href={
                next.id != 0 && next.id != undefined
                  ? `/projects/${next.id}`
                  : ""
              }
              className={
                next.id != 0 && next.id != undefined
                  ? "mil-link mil-dark mil-arrow-place"
                  : "mil-link mil-dark mil-arrow-place mil-disabled"
              }
            >
              <span>Siguiente proyecto</span>
            </Link>
          </div>
        </div>

        <ImageView />
      </section>
    </>
  );
};
export default ProjectInner3;
