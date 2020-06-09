//console.log('connected')

// insert google sheet url here - anyone with access can view this literal sheet -- this should go into an invisible file
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Z_QgMkSOtHpqjPDxQFwjQpcqUp1kHAqkXhnTaVi5PL4/edit?usp=sharing'
// this sheet as JSON is how we will pull the data from the sheet to the code
let sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Z_QgMkSOtHpqjPDxQFwjQpcqUp1kHAqkXhnTaVi5PL4/od6/public/values?alt=json'

$.ajax({
    url: sheetAsJSON,
  }).then((data) => {
      console.log("data", data)
      const projects = data.feed.entry.map( project => {
          return {
              title: project.gsx$title.$t,
              urllive: project.gsx$urllive.$t,
              urlgit: project.gsx$urlgit.$t,
              description: project.gsx$description.$t,
              image: project.gsx$image.$t,
          }
      }) // map ends
      app(projects)
  })
  // .catch is meant to handle errors
  .catch( err => console.log('err', err))

let $portfolio = $('<div>')

$('body').append($portfolio)

$portfolio.addClass('port-flex')

function app(projectsArr) {
    projectsArr.forEach(project => {
        let $card = $('<div>')
        $($portfolio).append($card)
        $card.addClass('card-class')

        let $title = $('<h3>')
        $title.text(project.title)
        $($card).append($title)
        $title.addClass('project-title')

        let $img =$('<img>')
            $img
                .attr('src', `${project.image}`)
            $($card).append($img)
            $img.addClass('card-image')

        let $linkflex = $('<div>')
            $($card).append($linkflex)
            $linkflex.addClass('link-flex')

        let $livelink =$('<a>')
            $livelink
                .attr('href', `${project.urllive}`)
                .attr('target', '_blank')
            $livelink.text('Live Site')
            $($linkflex).append($livelink)
            $livelink.addClass('live-link')

        let $gitlink =$('<a>')
            $gitlink
                .attr('href', `${project.urlgit}`)
                .attr('target', '_blank')
            $gitlink.text('Github Repo')
            $($linkflex).append($gitlink)
            $gitlink.addClass('live-link')
        
        let $description = $('<p>')
            $description.text(project.description)
            $($card).append($description)
            $description.addClass('project-description')
    })
}