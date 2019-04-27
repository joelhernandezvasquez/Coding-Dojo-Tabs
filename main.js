
function selectTab(e)
{
    const link = document.querySelector(".link-selected");  // node to the link that was previous selected 
    const newLink = e.target;   // new link that will get the style.

    link.classList.remove("link-selected"); // release the the active link clicked
    newLink.classList.add("link-selected"); // add the style to the new link that has been selected

    selectActiveTab(e);
}

function removeActiveTabStyle(activeTab)
{
  
  if(activeTab.classList.contains("tab"))
  {
     activeTab.classList.remove("show-content");
     return;
  }
  
  if(activeTab.classList.contains("tab-life-student"))
  {
    activeTab.classList.remove("show-content");
    return;
  }

  if(activeTab.classList.contains("testimonials-wrapper"))
  {
   activeTab.classList.remove("show-content");
    return;
  }
}

function selectActiveTab(e)
{
    const activeTab = document.querySelector(".tab-selected");

    if(e.target.dataset.link ==="home")
    {
      const homeTab = document.querySelector(".tab");
      removeActiveTabStyle(activeTab);
      homeTab.classList.add("tab-selected");
      homeTab.classList.add("show-content");
      return;
    }

    if(e.target.dataset.link==="life")
          {
            const lifeTab = document.querySelector(".tab-life-student");
            removeActiveTabStyle(activeTab);
            activeTab.classList.remove("tab-selected");
            lifeTab.classList.add("tab-selected");
            lifeTab.classList.add("show-content");
            return;
          }
      if(e.target.dataset.link==="alumni")
          {
            const alumniTab = document.querySelector(".testimonials-wrapper");
            removeActiveTabStyle(activeTab);
            activeTab.classList.remove("tab-selected");
            alumniTab.classList.add("tab-selected");
            alumniTab.classList.add("show-content");
            return;
          }
}

function selectVideo(e)
{
    if(e.target.closest("li"))
    {
      const videoSelected = document.querySelector(".video-selected");
      const newVideoSelected = e.target;

     videoSelected.classList.remove("video-selected");
     newVideoSelected.classList.add("video-selected");

       if(e.target.dataset.video==="week 4")
       {
         const activeVideo = document.querySelector(".video-item-display");
         const newActiveVideo = document.querySelector("#first-video-item");

         activeVideo.classList.remove("video-item-display");
         newActiveVideo.classList.add("video-item-display");
         return;
         
       }

       if(e.target.dataset.video==="week 6")
       {
         const activeVideo = document.querySelector(".video-item-display");
         const newActiveVideo = document.querySelector("#second-video-item");

         activeVideo.classList.remove("video-item-display");
         newActiveVideo.classList.add("video-item-display");
         return;
         
       }
       if(e.target.dataset.video==="week 13")
       {
         const activeVideo = document.querySelector(".video-item-display");
         const newActiveVideo = document.querySelector("#third-video-item");

         activeVideo.classList.remove("video-item-display");
         newActiveVideo.classList.add("video-item-display");
         return;
         
       }

    }
}