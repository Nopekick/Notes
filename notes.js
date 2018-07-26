let input = d3.select('#input')
let preview = d3.select('.preview')

input.on('input', ()=>{
  let note = d3.event.target.value;
  setPreview(note)
})

d3.select('#remove').on("click", ()=>{
  d3.selectAll("#list p").remove()
})

d3.select("#add").on("click", ()=>{
  d3.event.preventDefault()
  if(input.property("value").length > 0){
    d3.select("#list").append('p').classed('note', true).text(input.property('value'))
    input.property('value','')
    setPreview("")
  }
})

d3.select("#lucky").on("click", ()=>{
  let num = Math.floor(Math.random()*2)
  d3.selectAll("#list p").style("color", ()=>{
    return num===0 ? 'purple' : 'red'
  }).style("font-size", ()=>{
    return num===0 ? '20px' : '14px'
  })
})

function setPreview(val){
  preview.text(val).classed("hide", val==="")
}
