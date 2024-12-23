'use client';

export function ProductSpecs({ product }) {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#f97316] mt-8">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 border border-[#f97316] rounded-lg p-4">
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Marca</h3>
                  <p className="text-sm">{product.specifications.brand}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Modelo</h3>
                  <p className="text-sm">{product.specifications.model}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Tipo</h3>
                  <p className="text-sm">{product.specifications.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Capacidad de Carga</h3>
                  <p className="text-sm">{product.specifications.loadCapacity}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Potencia</h3>
                  <p className="text-sm">{product.specifications.power}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Peso Operativo</h3>
                  <p className="text-sm">{product.specifications.operatingWeight}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Altura de Descarga</h3>
                  <p className="text-sm">{product.specifications.dischargeHeight}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f97316]">Capacidad del Balde</h3>
                  <p className="text-sm">{product.specifications.bucketCapacity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
