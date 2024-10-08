import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What services does DevToDeploy offer?
          </AccordionTrigger>
          <AccordionContent>
          DevToDeploy specializes in managed IT services and Software Development. Other services include Revenue Cycle Management, Healthcare Staff Augmentation, EHR, and Enterprise IT Solutions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can DevToDeploy help my business grow?
          </AccordionTrigger>
          <AccordionContent>
          DevToDeploy enhances your online presence, streamlines IT operations, and optimizes digital marketing. Get a new website, custom software, or marketing strategy guidance. Thrive in the digital landscape with DevToDeploy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What sets  DevToDeploy apart from other IT service providers?</AccordionTrigger>
          <AccordionContent>
          At DevToDeploy, we are committed to innovation, quality, and customer satisfaction. Our skilled professionals leverage technology to drive business success, exceeding client expectations with effective and reliable solutions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  