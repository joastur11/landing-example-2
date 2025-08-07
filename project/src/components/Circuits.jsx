export function Circuits(){
  return(
     <section id="circuits" className="min-h-screen flex items-center justify-center bg-orange-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div class="bg-blue-200 p-4">Element 1 (in Column 1)</div>
          </div>
          <div class="col-span-1 grid grid-rows-2 gap-4">
            <div class="bg-green-200 p-4">Element 2 (in Column 2, Row 1)</div>
            <div class="bg-red-200 p-4">Element 3 (in Column 2, Row 2)</div>
          </div>
        </div>
     </section>
  )
}